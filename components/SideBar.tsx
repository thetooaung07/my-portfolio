import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/akame_cropped.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Thet Oo </span>Aung
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Thet_Oo_Aung_CV.pdf"
        download="Thet_Oo_Aung_CV.pdf"
      >
        <GiTie className="w-6 h-6"></GiTie>Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 my-5 text-green md:w-full">
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
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
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
        className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none "
        onClick={() => window.open("mailto:thetooaung07@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full bg-gradient-to-r from-green to-blue-400 "
      >
        Toggle Theme
      </button>
    </>
  );
};

export default SideBar;
