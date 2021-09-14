import { IProjects, IService, ISkill } from "./types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "NodeJs",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "60",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "40",
  },
];

export const projects: IProjects[] = [
  {
    id: 1,
    name: "COVID-19 Tracker",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/covid.png",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Akame Ga Kill!",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/akame_cropped.jpg",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 3,
    name: "COVID-19 Tracker",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/covid.png",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 4,
    name: "Akame Ga Kill!",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/akame_cropped.jpg",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 5,
    name: "COVID-19 Tracker",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/covid.png",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 6,
    name: "Akame Ga Kill!",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/akame_cropped.jpg",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 7,
    name: "COVID-19 Tracker",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/covid.png",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 8,
    name: "Akame Ga Kill!",
    description:
      "This app shows a statistical view about corona virus cases all over the world",
    image_path: "/images/akame_cropped.jpg",
    deployed_url: "https://toa-coronatracker.netlify.app",
    github_url: "https://github.com/thetooaung07/material-ui-corona-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
];
