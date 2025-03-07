import { frontend } from "./SkillList";

const projects = [
  {
    img: "/projectImages/hdd.webp",
    imgBlur: "/projectImages/hddBlur.webp",
    title: "Honorable Discharge Dumpsters",
    description: "A local dumpster rental business site that integrates Square for online dumpster rentals.",
    tech: [frontend[4], frontend[7], frontend[8]],
    siteLink: "",
    repoLink: "https://github.com/ChetManalo/honorable-discharge-dumpsters"
  },
  {
    img: "/projectImages/portfolio.webp",
    imgBlur: "/projectImages/portfolioBlur.webp",
    title: "My Portfolio",
    description: "My portfolio website that you're on right now!",
    tech: [frontend[3], frontend[8], frontend[6]],
    siteLink: "",
    repoLink: "https://github.com/ChetManalo/portfolio"
  },
  {
    img: "/projectImages/nuclear.webp",
    imgBlur: "",
    title: "Nuclear Transport",
    description: "Made for Brackeys Game Jam 2025.1",
    tech: [],
    siteLink: "https://corputz.itch.io/nuclear-transport",
    repoLink: ""
  }
]

export default projects;