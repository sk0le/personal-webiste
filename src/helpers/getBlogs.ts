import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../lib/types/Blogs";

const getLatestBlogs = async () => {
  const posts: BlogPost[] = [];
  const files = fs.readdirSync(`${path.resolve("./")}/src/_content/_posts`);
  const maxLen = files.length < 3 ? files.length : 3;

  for (let i = 0; i < maxLen; i++) {
    const file = `${path.resolve("./")}/src/_content/_posts/${files[i]}`;
    const md = fs.readFileSync(file, { encoding: "utf8", flag: "r" });
    const postMD = matter(md);
    const post: BlogPost = {
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
    posts.push(post);
  }

  return { posts };
};

export { getLatestBlogs };
