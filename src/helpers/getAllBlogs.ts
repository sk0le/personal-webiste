import fs from "fs";
import path from "path";

const getAllBlogs = async () => {
  const files = fs.readdirSync(`${path.resolve("./")}/src/_content/_posts`);
  const posts: string[] = [];

  files.map((value) => {
    posts.push(`/blog/${value.replace(".md", "")}`);
  });

  return { posts };
};

export { getAllBlogs };
