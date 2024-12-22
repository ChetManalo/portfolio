import "./styles/MemoryTile.scss";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const MemoryTile = () => {
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Track scores
  const [highscore, setHighscore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const mainRef = useRef<HTMLElement>(null);
  const tilesRef = useRef<HTMLElement[]>([]);
  const tileOrder = useRef<HTMLElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tilesClicked = useRef<number>(0);
  const rounds = useRef<number>(0);

  const colorRef = useRef<string>(localStorage.getItem("MTColor") || "purple");

  const beginRound = () => {
    tilesClicked.current = 0;
    mainRef.current!.style.pointerEvents = "none";
    mainRef.current!.style.cursor = "default";
    tileOrder.current.push(tilesRef.current[Math.floor(Math.random() * tilesRef.current.length)]);

    for (let i = 0; i < tileOrder.current.length; i++) {
      setTimeout(() => {
        !tileOrder.current[i] ? null : tileOrder.current[i].classList.add(colorRef.current);
        setTimeout(() => {
          !tileOrder.current[i] ? null : tileOrder.current[i].classList.remove(colorRef.current);
        }, 250);
      }, 500 * i);
    }

    setTimeout(() => {
      mainRef.current!.style.pointerEvents = "all";
      mainRef.current!.style.cursor = "pointer";
    }, 500 * tileOrder.current.length);
  }

  const gameOver = () => {
    const difficultyHighscore: number = parseInt(localStorage.getItem(`${difficulty}HS`)!) || 0;

    if (rounds.current > difficultyHighscore) {
      setHighscore(rounds.current);
      localStorage.setItem(`${difficulty}HS`, rounds.current.toString());
    } else {
      setHighscore(difficultyHighscore);
    }

    navigator.vibrate([200]);
    mainRef.current!.style.pointerEvents = "none";
    setIsGameOver(true);
  }

  const handleClick = (e: MouseEvent) => {
    const selectedTile = e.target as HTMLElement;
    selectedTile.style.transform = "scale(0.9)";
    setTimeout(() => {
      selectedTile.style.transform = "scale(1)";
    }, 100);
    if (selectedTile === tileOrder.current[tilesClicked.current]) {
      tilesClicked.current++;
      if (tilesClicked.current === tileOrder.current.length) {
        rounds.current++;
        setScore(rounds.current);
        setTimeout(beginRound, 300);
      }
    } else {
      gameOver();
    }
  }

  const playAgain = () => {
    tileOrder.current = [];
    setIsGameOver(false);
    rounds.current = 0;
    setScore(0);
    beginRound();
  }

  useEffect(() => {
    let tiles: number | undefined;
    switch (difficulty) {
      case "Easy":
        tiles = 9;
        mainRef.current!.style.gridTemplateColumns = "repeat(3, 1fr)";
        break;
      case "Medium":
        tiles = 25;
        mainRef.current!.style.gridTemplateColumns = "repeat(5, 1fr)";
        break;
      default:
        tiles = 49;
        mainRef.current!.style.gridTemplateColumns = "repeat(7, 1fr)";
    }

    const difficultyHighscore: number = parseInt(localStorage.getItem(`${difficulty}HS`)!) || 0;
    setHighscore(difficultyHighscore);
    rounds.current = 0;
    setScore(0);
    setIsGameOver(false);

    const sqrRt = Math.sqrt(tiles);
    const corners = {
      topLeft: 0,
      topRight: sqrRt - 1,
      bottomLeft: tiles - sqrRt,
      bottomRight: tiles - 1
    }

    mainRef.current!.innerHTML = "";

    tilesRef.current = [];
    tileOrder.current = [];

    for (let i = 0; i < tiles; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";

      switch (i) {
        case corners.topLeft:
          tile.style.borderRadius = "10px 0 0 0";
          break;
        case corners.topRight:
          tile.style.borderRadius = "0 10px 0 0";
          break;
        case corners.bottomLeft:
          tile.style.borderRadius = "0 0 0 10px";
          break;
        case corners.bottomRight:
          tile.style.borderRadius = "0 0 10px 0";
          break;
      }

      tile.id = `${i + 1}`;
      tile.addEventListener("mousedown", handleClick);
      tilesRef.current.push(tile);
      mainRef.current!.append(tile);
    }

    beginRound();
  }, [difficulty])

  const changeColor = (e: ChangeEvent<HTMLSelectElement>) => {
    colorRef.current = e.target.value;
    localStorage.setItem("MTColor", colorRef.current);
  }

  const handleButtonHover = () => {
    buttonRef.current!.classList.add(colorRef.current);
  }

  const handleButtonUnHover = () => {
    buttonRef.current!.classList.remove(colorRef.current);
  }

  return (
    <>
      <section id="gameContainer">
        <section id="scores">
          <p>Score: {score}</p>
          <p>{difficulty} Highscore: {highscore}</p>
        </section>
        <section id="game" ref={mainRef}></section>
        <section id="settings">
          <div>
            <label htmlFor="difficulty">Difficulty: </label>
            <select name="difficulty" id="difficulty" onChange={(e: ChangeEvent<HTMLSelectElement>) => setDifficulty(e.target.value as "Easy" | "Medium" | "Hard")}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            {isGameOver && <button
              ref={buttonRef}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonUnHover}
              onClick={playAgain}>Play again</button>}
          </div>
          <div>
            <label htmlFor="color">Color: </label>
            <select name="color" id="color" defaultValue={colorRef.current} onChange={changeColor}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
            </select>
          </div>
        </section>
      </section>
    </>
  )
}

export default MemoryTile;