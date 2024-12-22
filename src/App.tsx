import { useState, useRef } from "react";
import Window from "./components/Window";
import Portfolio from "./windows/Portfolio";
import { ThemeProvider } from "./components/ThemeProvider";
import Icon from "./components/Icon";
import Resume from "./windows/Resume";
import MemoryTile from "./windows/MemoryTile";

function App() {
  const [showPortfolio, setShowPortfolio] = useState<boolean>(true);
  const [showResume, setShowResume] = useState<boolean>(false);
  const [showMemoryTile, setShowMemoryTile] = useState<boolean>(false);

  const currentZIndex = useRef<number>(10);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <nav>
          <Icon name="My Portfolio" image="/Portfolio.svg" setWindow={setShowPortfolio} />
          <Icon name="Resume" image="/Resume.svg" setWindow={setShowResume} />
          <Icon name="MemoryTile" image="/MemoryTile.svg" setWindow={setShowMemoryTile} />
        </nav>
        {showPortfolio && <Window title="My Portfolio" setShowWindow={setShowPortfolio} currentZIndex={currentZIndex}><Portfolio /></Window>}
        {showResume && <Window title="Resume" setShowWindow={setShowResume} currentZIndex={currentZIndex}><Resume /></Window>}
        {showMemoryTile && <Window title="MemoryTile" setShowWindow={setShowMemoryTile} currentZIndex={currentZIndex}><MemoryTile /></Window>}
      </main>
    </ThemeProvider>
  )
}

export default App