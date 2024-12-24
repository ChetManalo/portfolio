import { useState, useRef } from "react";
import Window from "./components/Window";
import Portfolio from "./windows/Portfolio";
import Resume from "./windows/Resume";
import MemoryTile from "./windows/MemoryTile";
import Icon from "./components/Icon";
import { ThemeProvider } from "./components/ThemeProvider";

import PortfolioIcon from "./assets/images/Portfolio.svg";
import ResumeIcon from "./assets/images/Resume.svg";
import MemoryTileIcon from "./assets/images/MemoryTile.svg";

function App() {
  const [showPortfolio, setShowPortfolio] = useState<boolean>(true);
  const [showResume, setShowResume] = useState<boolean>(false);
  const [showMemoryTile, setShowMemoryTile] = useState<boolean>(false);

  const currentZIndex = useRef<number>(10);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <nav>
          <Icon name="My Portfolio" image={PortfolioIcon} setWindow={setShowPortfolio} />
          <Icon name="Resume" image={ResumeIcon} setWindow={setShowResume} />
          <Icon name="MemoryTile" image={MemoryTileIcon} setWindow={setShowMemoryTile} />
        </nav>
        {showPortfolio && <Window title="My Portfolio" setShowWindow={setShowPortfolio} currentZIndex={currentZIndex}><Portfolio /></Window>}
        {showResume && <Window title="Resume" setShowWindow={setShowResume} currentZIndex={currentZIndex}><Resume /></Window>}
        {showMemoryTile && <Window title="MemoryTile" setShowWindow={setShowMemoryTile} currentZIndex={currentZIndex}><MemoryTile /></Window>}
      </main>
    </ThemeProvider>
  )
}

export default App