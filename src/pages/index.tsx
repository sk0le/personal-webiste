import Head from "next/head";
import { getRepos } from "../helpers/getRepos";
import { Repo } from "../lib/types/Repos";
import About from "../modules/Home/About";
import HomePage from "../modules/Home/HomePage";
import Projects from "../modules/Home/Projects";
import Skills from "../modules/Home/Skills";

interface PageProps {
  repos: Repo[];
}

export default function Home({ repos }: PageProps) {
  if (!repos) return <p>waiting...</p>;
  return (
    <>
      <Head>
        <title>Amel Islamovic | Home </title>
      </Head>
      <main className="flex-1 w-full h-full flex flex-col justify-start items-center">
        <HomePage />
        <Skills />
        <About />
        <Projects projects={repos} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { repos } = await getRepos("sk0le", ["vaktija.ba", "react-ham-menu"]);
  return {
    props: {
      repos,
    },
  };
}
