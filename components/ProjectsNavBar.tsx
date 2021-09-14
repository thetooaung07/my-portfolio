import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavBarItem: FunctionComponent<{ value: Category | "all" , handleFilterCategory:Function }> = ({
  value,
  handleFilterCategory,
}) => {
  return <li className="capitalize cursor-pointer hover:text-green" onClick={()=>handleFilterCategory(value)}>{value}</li>;
};

const ProjectsNavBar:FunctionComponent<{handleFilterCategory:Function}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavBarItem value="all"  {...props}/>
      <NavBarItem value="react"  {...props}/>
      <NavBarItem value="node" {...props} />
      <NavBarItem value="express"  {...props}/>
      <NavBarItem value="mongo"{...props} />
      <NavBarItem value="spring boot"  {...props}/>
    </div>
  );
};

export default ProjectsNavBar;
