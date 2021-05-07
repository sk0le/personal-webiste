import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../lib/types/Blogs";

const getBlog = async (name: any) => {
  let post: BlogPost;
  const files = fs.readdirSync(`${path.resolve("./")}/src/_content/_posts`);
  const maxLen = files.length < 3 ? files.length : 3;

  const file = `${path.resolve("./")}/src/_content/_posts/${name}.md`;
  const md = fs.readFileSync(file, { encoding: "utf8", flag: "r" });
  const postMD = matter(md);
  post = {
    content: postMD.content,
    data: {
      created_at: postMD.data.created_at,
      long_read: postMD.data.long_read,
      title: postMD.data.title,
      slug: postMD.data.slug,
      img: postMD.data.img,
      desc: postMD.data.desc,
    },
  };

  return post;
};

export { getBlog };
