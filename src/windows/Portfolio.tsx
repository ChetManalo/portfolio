import { useEffect, useRef, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import ThemeToggle from "../components/ThemeToggle";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import "./styles/portfolio.scss";

const Portfolio = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  const noScroll = (e: TouchEvent) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (toggleNav) {
      navRef.current!.style.top = "0";
      document.body.addEventListener('touchmove', noScroll, {passive: false});
    } else {
      navRef.current!.style.top = "-150%";
      document.body.removeEventListener('touchmove', noScroll);
    }

    return () => {
      document.body.removeEventListener("touchmove", noScroll);
    }
  }, [toggleNav, navRef])

  return (
    <div id="portfolio">
      <Router>
        <nav ref={navRef}>
          <ul>
            <li>
              <NavLink onClick={() => setToggleNav(false)} to="/">About</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggleNav(false)} to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggleNav(false)} to="/skills">Skills</NavLink>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
        <GiHamburgerMenu onClick={() => setToggleNav(!toggleNav)} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Portfolio;