import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import { fadeInUp, routeAnimation, stagger } from "../animations";

import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About = ({ endpoint }) => {
  // console.log(endpoint);

  return (
    <>
      <Head>
        <title> Thet | About | Nextjs </title>
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
      >
        <h5 className="my-3 font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum alias
          dignissimos corrupti sit quas, culpa doloribus amet explicabo veniam
          molestias. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci, fugiat. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate voluptatum dolores quasi
          itaque ullam omnis architecto dolorum dignissimos accusantium.
        </h5>

        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h6 className="my-3 text-xl font-bold tracking-wide">
            What I am doing
          </h6>
          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                key={service.title}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Serverside working

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  // console.log("Server : " , data.services);

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};
