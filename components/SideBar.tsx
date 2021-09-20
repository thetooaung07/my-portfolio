import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {
  BsAppIndicator,
  BsLink45Deg,
  BsPeopleCircle,
  BsPerson,
} from "react-icons/bs";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ProfilePic from "../public/images/akame_cropped.jpg";

const SideBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-xl

  return (
    <div>
      <Image
        src={ProfilePic}
        alt="avatar"
        className="mx-auto border rounded-full "
        height={128}
        width={128}
        // quality={100}
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-skin-middle">Thet Oo </span>Aung
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 ">
        <BsAppIndicator className="w-4 h-4 mx-2"></BsAppIndicator>Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Thet_Oo_Aung_CV.pdf"
        download="Thet_Oo_Aung_CV.pdf"
      >
        <BsLink45Deg className="w-6 h-6"></BsLink45Deg>Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around my-5 text-skin-middle border-custom md:w-full">
        <a href="https://www.facebook.com/thetooaung07" aria-label="Facebook">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/thetooaung07" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/thet-oo-aung-7359a0219/"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation></GoLocation>
          <span>Yangon,Myanmar</span>
        </div>
        <p className="my-2">thetooaung07@gmail.com</p>
        <p className="my-2">091234567 / 12317892</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-1 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none "
        onClick={() => window.open("mailto:thetooaung07@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-1 my-4 text-white rounded-full bg-gradient-to-r from-green to-blue-400 "
      >
        {theme === "system"
          ? "Change Theme"
          : theme !== "system" && theme === "dark"
          ? "Light"
          : "Dark"}
        {}
      </button>
    </div>
  );
};

export default SideBar;
