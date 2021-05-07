import { useRouter } from "next/router";
import Button from "../../components/elements/Button";
import { BlogPost } from "../../lib/types/Blogs";

interface PageProps {
  posts: BlogPost[];
}

export default function LatestBlogs({ posts }: PageProps) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 xl:grid-cols-3 gap-8 place-items-center max-w-screen-xl w-full">
      {posts.map((value, index) => {
        return (
          <div
            key={index}
            className="max-w-sm w-full h-auto shadow-xl bg-gray-200 border border-gray-900 transition duration-500 dark:bg-gray-800 rounded-md"
          >
            <img
              src={value.data.img}
              alt="image"
              className="rounded-md rounded-b-none"
            />
            <div className="py-4 px-4">
              <p className="my-2 dark:text-gray-400 text-gray-600">
                {value.data.created_at} | {value.data.long_read}
              </p>
              <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-900">
                {value.data.title}
              </h1>
              <p className="mt-2 mb-4 dark:text-gray-300 text-gray-700">
                {value.data.desc}
              </p>
              <Button onClick={() => router.push(`/blog/${value.data.slug}`)}>
                View blog
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
