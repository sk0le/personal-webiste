import { useRouter } from "next/router";
import { useEffect } from "react";

import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Carousel from "@/components/layout/Carousel";
import Head from "next/head";

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync("public/projects");

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
}

interface Params extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params as unknown as Params;

    const fileName = fs.readFileSync(`public/projects/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
};

interface CProps {
  frontmatter: Project["frontmatter"];
  content: string;
}

function Project({ frontmatter, content }: CProps) {
  useEffect(() => {
    console.log(frontmatter);
  }, []);
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Project by Amel Islamovic</title>
      </Head>
      <div className="min-h-screen">
        <Carousel images={frontmatter.images} />
        <div className="p-12">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl font-black">{frontmatter.title}</h1>
            <div className="flex items-center space-x-4">
              <a
                className="px-4 py-2 bg-red-600 text-white rounded-md border border-red-800 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                rel="noreferrer"
                target="_blank"
                href={frontmatter.url}
              >
                Website
              </a>

              {frontmatter.github && (
                <a
                  className="px-4 py-2 bg-zinc-600 text-white rounded-md border border-zinc-800 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  rel="noreferrer"
                  target="_blank"
                  href={frontmatter.github}
                >
                  Github
                </a>
              )}
            </div>
            <p>
              {frontmatter.role} | {frontmatter.time} | {frontmatter.date}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
            className="prose mt-12 max-w-3xl"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Project;
