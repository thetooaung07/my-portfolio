import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const SideBar = () => {
  return (
    <div>
      <img
        src="images/akame_cropped.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Thet Oo </span>Aung
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="pdf"
      >
        <GiTie className="w-6 h-6"></GiTie>Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation></GoLocation>
          <span>Yangon,Myanmar</span>
        </div>
        <p className="my-2">thetooaung07@gmail.com</p>
        <p className="my-2">091234567 / 12317892</p>
      </div>
      {/* Email Button */}
      <button className="w-8/12 px-5 py-2 my-2 text-white bg-green-400 rounded-full bg-gradient-to-r from-green-400 to-blue-400 " >Email Me</button>
      <button className="w-8/12 px-5 py-2 my-2 text-white bg-green-400 rounded-full bg-gradient-to-r from-green-400 to-blue-400 " >Toggle Theme</button>
    </div>
  );
};

export default SideBar;
