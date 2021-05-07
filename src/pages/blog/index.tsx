import Head from "next/head";
import { getLatestBlogs } from "../../helpers/getBlogs";
import LatestBlogs from "../../modules/Blog/LatestBlogs";
import { BlogPost } from "../../lib/types/Blogs";
import Search from "../../modules/Blog/Search";

interface PageProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: PageProps) {
  return (
    <>
      <Head>
        <title>Amel Islamovic | Blog</title>
      </Head>
      <main className="flex-1 w-full min-h-[90vh] h-full flex flex-col justify-center items-center py-8">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-5xl text-indigo-600 font-bold">Blog</h1>
          <div className="w-12 h-1 bg-indigo-600"></div>
        </div>
        <Search />
        <LatestBlogs posts={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await getLatestBlogs();
  return {
    props: { posts },
  };
}
