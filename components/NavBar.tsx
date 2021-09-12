import { useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="flex space-x-3 text-red-400 font-lg">
        {activeItem !== "About" && (
          <Link href="/">
            <a>
              <span onClick={()=> {setActiveItem('About')}} >About</span>
            </a>
          </Link>
        )}

        {activeItem !== "Projects" && (
          <Link href="/projects">
            <a>
              <span onClick={()=> {setActiveItem('Projects')}} >Projects</span>
            </a>
          </Link>
        )}

        {activeItem !== "Resume" && (
          <Link href="/resume">
            <a>
              <span onClick={()=> {setActiveItem('Resume')}} >Resume</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
