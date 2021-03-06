import { VoidFunctionComponent } from "react";
import { ISkill } from "../types";
import { motion } from "framer-motion";

const Bar: VoidFunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: { width: 10 },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-white bg-opacity-25 rounded-full dark:bg-dark-300 ">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-skin-base to-skin-secondary "
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
