import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Header from "@/components/layout/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      transition: { duration: 1 },
    });
    controls.start({
      translateY: [0, -5, 0],
      transition: { repeat: Infinity },
    });
  }, [controls]);

  return (
    <>
      <Head>
        <title>Amel Islamovic</title>
        <meta name="description" content="Personal Website of Amel Islamovic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen w-full bg-gray-100 flex flex-col justify-start items-center">
        <Header />

        <div className="z-10 max-w-5xl flex-1 h-full w-full px-4 xl:px-0 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, translateX: "-50%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start justify-start"
          >
            <h1 className="text-7xl  font-black font-inter">
              full-stack
              <br />
              developer
            </h1>
            <p className="mt-4 max-w-sm">
              Hi, my name is Amel Islamovic, <br />
              I’m passionate full-stack developer from Bosnia and Herzegovina.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="mt-4 px-10 py-3 bg-black text-gray-100 rounded-full"
            >
              Contact Me
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-4 animate-left-right"
              />
            </motion.button>
          </motion.div>
          <motion.img
            src={"/images/sculpture.png"}
            alt=""
            initial={{ clipPath: "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)" }}
            animate={controls}
            className="w-full max-w-sm"
          />
        </div>

        <motion.div
          initial={{ scale: "0%", translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: "100%" }}
          transition={{ duration: 1 }}
          className="h-[35rem] w-[35rem] shadow bg-white absolute top-2/4 left-2/4 z-[0] -translate-x-2/4 -translate-y-2/4 rounded-full"
        ></motion.div>
      </main>

      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
