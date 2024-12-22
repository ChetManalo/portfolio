import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export {};

declare global {
  interface Project {
    img: string
    title: string
    description: string
    tech: Skill[]
    siteLink: string
    repoLink: string | undefined
  }

  interface Skill {
    name: string,
    icon: IconType,
    color: string
  }

  interface Icon {
    name: string,
    image: string,
    setWindow: Dispatch<SetStateAction<boolean>>
  }
}