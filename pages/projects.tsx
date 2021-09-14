import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as ProjectsData } from "../data";
import { Category } from "../types";

const project = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [projects, setProjects] = useState(ProjectsData);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState("all");

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
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavBar handleFilterCategory={handleFilterCategory} active={active} ></ProjectsNavBar>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
