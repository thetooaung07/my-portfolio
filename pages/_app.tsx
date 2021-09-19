import "../styles/globals.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import ThemeChanger from "../components/ThemeChanger";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>My Portfolio with Nextjs</title>
      </Head>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <div className="grid grid-cols-12 gap-6 px-5 my-11 lg:pl-48 lg:pr-24 sm:px-20">
          <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
            <SideBar />
          </div>
          <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-8 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark ">
            <NavBar />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
          <div className="lg:col-span-1 col-span-full">
            <ThemeChanger />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
