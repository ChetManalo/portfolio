import { FaReact, FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs,
        SiTailwindcss, 
        SiSass, 
        SiVite, 
        SiTypescript, 
        SiExpress, 
        SiMongodb,
        SiMongoose,
        SiNodedotjs,
        SiJest,
        SiDocker,
        SiFigma,
        SiGit,
        SiLinux,
        SiPostman,
        SiHtml5,
        SiCss3,
        SiWordpress} from "react-icons/si";

const frontend: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#e34c26"}, // 0
  { name: "CSS", icon: SiCss3, color: "#264de4"}, // 1
  { name: "JavaScript", icon: FaJs, color: "#d2b812"}, // 2
  { name: "React", icon: FaReact, color: "#1dcbf9"}, // 3
  { name: "Next.js", icon: SiNextdotjs, color: "#000"}, // 4
  { name: "SCSS", icon: SiSass, color: "#CD6799"}, // 5
  { name: "Vite", icon: SiVite, color: "#e4ab00"}, // 6
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#15C2B8"}, // 7
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC"}, // 8
]

const backend: Skill[] = [
  { name: "Express", icon: SiExpress, color: "#000"}, // 0
  { name: "MongoDB", icon: SiMongodb, color: "#58AA50"}, // 1
  { name: "Mongoose", icon: SiMongoose, color: "#890000"}, // 2
  { name: "MySQL", icon: GrMysql, color: "#00688F"}, // 3
  { name: "Node", icon: SiNodedotjs, color: "#3E863D"}, // 4
]

const tools: Skill[] = [
  { name: "Jest", icon: SiJest, color: "#C63D14"}, // 0
  { name: "Docker", icon: SiDocker, color: "#1D91B4"}, // 1
  { name: "Figma", icon: SiFigma, color: "#A259FF"}, // 2
  { name: "Git", icon: SiGit, color: "#df4c37"}, // 3
  { name: "Linux", icon: SiLinux, color: "#CC8930"}, // 4
  { name: "Postman", icon: SiPostman, color: "#F15A24"}, // 5
  { name: "WordPress", icon: SiWordpress, color: "#21759B" }, // 6
]

export {
  frontend,
  backend,
  tools
};