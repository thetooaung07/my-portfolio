/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as ProjectsData } from "../data";
import { Category } from "../types";

const project = () => {
  const [projects, setProjects] = useState(ProjectsData);

  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(ProjectsData);
      setActive(category);
      return;
    }
    const newArray = ProjectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title> Thet | Projects | Nextjs </title>
      </Head>

      <motion.div
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: "65vh" }}
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ProjectsNavBar
          handleFilterCategory={handleFilterCategory}
          active={active}
        ></ProjectsNavBar>
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.id}
              className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard
                project={project}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default project;
