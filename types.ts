import { IconType } from "react-icons";
export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  Icon: IconType;
  level: string;
}

export interface IProjects {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" |"mongo" | "spring boot" ;
