import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getAllBlogs } from "../../helpers/getAllBlogs";
import { getBlog } from "../../helpers/getBlog";
import { BlogPost } from "../../lib/types/Blogs";
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-eighties.css";

interface PageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: PageProps) {
  useEffect(() => {
    const con = document.querySelector(".highlightCustom");
    if (con) {
      const nodes = con.querySelectorAll("pre");
      nodes.forEach((node) => {
        node.style.fontFamily = "Poppins";
        hljs.highlightBlock(node);
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Amel Islamovic | {post.data.title}</title>
        <meta name="description" content={post.data.desc} />
        <meta name="title" content={post.data.title} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="sad" />
        <meta property="og:title" content={post.data.title} />
        <meta property="og:description" content={post.data.desc} />
        <meta property="og:image" content={post.data.img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="logsl" />
        <meta property="twitter:title" content={post.data.title} />
        <meta property="twitter:description" content={post.data.desc} />
        <meta property="twitter:image" content={post.data.img} />
      </Head>
      <main className="flex-1 w-full min-h-[90vh] h-full flex flex-col justify-start items-center py-8 px-4 xl:px-0">
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-screen-xl w-full text-center text-gray-900 dark:text-gray-100 font-bold">
            {post.data.title}
          </h1>
          <p className="text-xl text-center text-gray-500 dark:text-gray-600">
            {post.data.created_at} | {post.data.long_read}
          </p>
        </div>
        <ReactMarkdown
          children={post.content}
          className="prose highlightCustom dark:prose-dark prose-sm md:prose-lg lg:prose-xl px-4 prose-indigo my-4"
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const { posts } = await getAllBlogs();
  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let postAfter: BlogPost = {
    content: "",
    data: {
      created_at: "",
      long_read: "",
      title: "",
      slug: "",
      img: "",
      desc: "",
    },
  };

  if (context.params) {
    if (context.params.slug) {
      let post = await getBlog(context.params.slug);
      postAfter = post;
    }
  }
  return {
    props: {
      post: postAfter,
    },
  };
}
