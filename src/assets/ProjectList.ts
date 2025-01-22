import { frontend, backend } from "./SkillList";

const projects = [
  {
    img: "/projectImages/hdd.webp",
    imgBlur: "/projectImages/hddBlur.webp",
    title: "Honorable Discharge Dumpsters",
    description: "A local dumpster rental business site that integrates Square for online dumpster rentals.",
    tech: [frontend[4], frontend[7], frontend[8]],
    siteLink: "https://www.honorabledischargedumpsters.com/",
    repoLink: ""
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
    img: "/projectImages/searchinator.webp",
    imgBlur: "/projectImages/searchinatorBlur.webp",
    title: "Spotify Searchinator",
    description: "The Spotify Searchinator allows you to search for songs, artists, and albums.",
    tech: [frontend[3], frontend[7], frontend[8], backend[0], backend[1]],
    siteLink: "https://pp3-spotify-production.up.railway.app/",
    repoLink: "https://github.com/ManaloChet-FS/PP3-Spotify"
  },
]

export default projects;