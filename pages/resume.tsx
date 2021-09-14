import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"  
    >
      {/* education & experience */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Engineering and IT
            </h5>
            <p className="font-semibold">
              Yangon Technological University (2017 - present)
            </p>
            <p className="my-3">
              I am currently pursuing Computer Science and Engineering Degree.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Engineering and IT
            </h5>
            <p className="font-semibold">
              Yangon Technological University (2017 - present)
            </p>
            <p className="my-3">
              I am currently pursuing Computer Science and Engineering Degree.
            </p>
          </div>
        </motion.div>
      </div>

      {/* language & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar key={tool.name} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
