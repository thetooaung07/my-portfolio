import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

import { BiBookReader } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";

const resume = () => {
  return (
    <>
      <Head>
        <title> Thet | Resume | Nextjs </title>
      </Head>

      <motion.div
        className="px-4 py-2 divide-y divide-black md:px-6"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* education & experience */}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="flex items-baseline my-3 space-x-2 text-2xl font-bold ">
              <BiBookReader className="mr-2 text-xl" /> Education
            </h5>

            <div>
              <h5 className="my-3 text-xl font-bold">
                Computer Engineering and IT
              </h5>
              <p className="font-semibold text-black dark:text-opacity-50 dark:text-white">
                Yangon Technological University (2017 - present)
              </p>
              <p className="mt-2 mb-4 text-black dark:text-opacity-50 dark:text-white">
                I am currently pursuing Computer Science and Engineering Degree.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="flex items-center my-3 text-2xl font-bold">
              <VscCode className="mr-2" /> Experience
            </h5>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Computer Engineering and IT
              </h5>
              <p className="font-semibold text-black dark:text-opacity-50 dark:text-white ">
                Yangon Technological University (2017 - present)
              </p>
              <p className="mt-2 mb-4 text-black dark:text-opacity-50 dark:text-white ">
                I am currently pursuing Computer Science and Engineering Degree.
              </p>
            </div>
          </motion.div>
        </div>

        {/* language & tools */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold md:mt-5 md:mb-6">
              Languages & Frameworks
            </h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar key={language.name} data={language} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold md:mt-5 md:mb-6">
              Tools & Software
            </h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar key={tool.name} data={tool} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default resume;
