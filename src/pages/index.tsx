import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Header from "@/components/layout/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import fs from "fs";
import matter from "gray-matter";

interface CProps {
  projects: Project[];
}
export default function Home({ projects }: CProps) {
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
        <title>Amel Islamović | Personal website</title>

        <meta name="title" content="Amel Islamović | Personal Website" />
        <meta
          name="description"
          content="Personal Website of Amel Islamović."
        />
        <meta
          name="keywords"
          content="amel islamovic, software development, full stack developer"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Amel Islamović" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen w-full bg-gray-100 flex flex-col justify-start items-center pb-6 md:pb-0">
        <Header />

        <div className="NO-X z-10 flex-col-reverse md:flex-row md:max-w-5xl flex-1 h-full w-full px-4 xl:px-0 flex justify-center md:justify-between items-center">
          <motion.div
            initial={{ opacity: 0, translateX: "-50%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center md:items-start md:justify-start"
          >
            <h1 className="text-7xl  font-black font-inter  text-center md:text-left">
              full-stack
              <br />
              developer
            </h1>
            <p className="mt-4 max-w-sm text-center md:text-left">
              Hi, my name is Amel Islamovic, <br />
              I’m passionate full-stack developer from Bosnia and Herzegovina.
            </p>
            <motion.a
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{
                scale: 0.9,
              }}
              href="#contact"
              className="mt-4 px-10 py-3 bg-black text-gray-100 rounded-full"
            >
              Contact Me
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-4 animate-left-right"
              />
            </motion.a>
          </motion.div>
          <motion.img
            src={"/images/sculpture.png"}
            alt=""
            initial={{ clipPath: "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)" }}
            animate={controls}
            className="w-full my-4 md:my-0 max-w-xs md:max-w-sm"
          />
        </div>

        <motion.div
          initial={{ scale: "0%", translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: "100%" }}
          transition={{ duration: 1 }}
          className="max-h-[35rem] h-full max-w-[35rem] w-full shadow bg-white absolute top-2/4 left-2/4 z-[0] -translate-x-2/4 -translate-y-2/4 rounded-full"
        ></motion.div>
      </main>

      <Skills />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  try {
    const files = fs.readdirSync("public/projects");

    const projects = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/projects/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    // console.log(projects);

    return {
      props: { projects },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}
