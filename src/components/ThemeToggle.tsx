import { useEffect, useRef } from "react";
import "./styles/themeToggle.scss";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  useEffect(() => {
    if (theme === "system") {
      if (prefersLight) toggleRef.current!.classList.add("light");
      setTheme(prefersLight ? "light" : "dark");
    }

    if (theme === "light") toggleRef.current!.classList.add("light");
  }, []);

  const toggleTheme = (): void => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    toggleRef.current!.classList.toggle("light");
  }

  return (
    <button id="themeToggle" ref={toggleRef} onClick={toggleTheme} tabIndex={0} aria-label="Theme toggle">
      <div>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </div>
    </button>
  )
}

export default ThemeToggle;