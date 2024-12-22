import "./styles/window.scss";
import { ReactNode, useRef, useEffect, Dispatch, SetStateAction, MutableRefObject } from "react";

type componentProps = {
  children: ReactNode
  title: string
  setShowWindow: Dispatch<SetStateAction<boolean>>
  currentZIndex: MutableRefObject<number>;
}

const Window = ({ children, title, setShowWindow, currentZIndex }: componentProps) => {
  const windowRef = useRef<HTMLElement>(null);
  const header = useRef<HTMLElement>(null);
  const close = useRef<HTMLParagraphElement>(null);

  let windowZIndex: number | null;

  const move = (e: MouseEvent, xOffset: number, yOffset: number): void => {
    // Gets mouse position
    const mouseX: number = e.clientX;
    const mouseY: number = e.clientY;

    // Sets window position
    windowRef.current!.style.left = `${mouseX - xOffset + (windowRef.current!.offsetWidth / 2)}px`;
    windowRef.current!.style.top = `${mouseY - yOffset - 2 + (windowRef.current!.offsetHeight / 2)}px`;
  };

  const startDrag = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    // If clicking on the window controls top-right, don't move window
    if (target.nodeName === "P") {
      return;
    }

    // Gets mouse location relative to window header
    const xOffset: number = e.offsetX;
    const yOffset: number = e.offsetY;

    const wrappedMove = (e: MouseEvent) => move(e, xOffset, yOffset);
    document.addEventListener("mousemove", wrappedMove);

    // Removes the mousemove listener when the user is no longer clicking on window header
    document.addEventListener("mouseup", (): void => {
      document.removeEventListener("mousemove", wrappedMove);
    })
  }

  const handleWindowClick = (): void => {
    // Checks if window doesn't currently have the highest z-index
    if (windowZIndex !== currentZIndex.current) {
      // Increase and set the z-index
      currentZIndex.current += 1;
      windowZIndex = currentZIndex.current;
      windowRef.current!.style.zIndex = `${currentZIndex.current}`;
    }
  }

  useEffect(() => {
    handleWindowClick();

    // Closes the window
    const handleCloseClick = (): void => setShowWindow(false);
    close.current!.addEventListener("click", handleCloseClick);
    windowRef.current!.addEventListener("mousedown", handleWindowClick);
    header.current!.addEventListener("mousedown", startDrag);

    // Cleans up the listeners after window unmounts
    return () => {
      windowRef.current?.removeEventListener("mousedown", handleWindowClick);
      header.current?.removeEventListener("mousedown", startDrag);
      close.current?.removeEventListener("click", handleCloseClick);
    };
  }, [windowRef, header, close])

  return (
    <section className="window" ref={windowRef}>
        <header ref={header}>
          <h2>{title}</h2>
          <p ref={close}>X</p>
        </header>
        <main>
          {children}
        </main>
    </section>
  )
}

export default Window;