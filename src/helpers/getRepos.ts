import { Repo } from "../lib/types/Repos";
import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";

const octokit = new Octokit();

const getRepos = async (username: string, ignore?: string[]) => {
  let repos: Repo[] = [];
  const res = await octokit.request("GET /users/{username}/repos", {
    username: username,
  });
  const data = res.data;
  if (!ignore) {
    for (let i = 0; i < data.length; i++) {
      repos.push({
        name: data[i].name,
        description: data[i].description,
        url: data[i].html_url,
        language: data[i].language,
        created: data[i].created_at,
        webiste: data[i].homepage,
      });
    }
  }

  if (ignore) {
    for (let i = 0; i < data.length - ignore.length; i++) {
      let skip = false;
      for (let j = 0; j < ignore.length; j++) {
        if (ignore[j] == data[i].name) skip = true;
      }
      if (!skip) {
        let file = `${path.resolve("./")}/src/_content/_projects/${
          data[i].name
        }.md`;
        const readme = fs.readFileSync(file, { encoding: "utf8", flag: "r" });

        let object: Repo = {
          name: data[i].name,
          description: data[i].description,
          url: data[i].html_url,
          language: data[i].language,
          created: data[i].created_at,
          webiste: data[i].homepage,
          readme,
        };
        repos.push(object);
      }
    }
  }
  return { repos };
};

export { getRepos };
