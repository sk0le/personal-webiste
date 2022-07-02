import Button from "../../../components/elements/Button";
import { Repo } from "../../../lib/types/Repos";
import Project from "./Project";

interface PageProps {
  projects: Repo[];
}

export default function Projects({ projects }: PageProps) {
  return (
    <div
      id="projects"
      className="min-h-[60vh] h-full w-full flex flex-col justify-center items-center py-6 pb-12 px-2"
    >
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-5xl text-indigo-600 font-bold">Projects</h1>
        <div className="w-12 h-1 bg-indigo-600"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        {projects.map((value, index) => (
          <Project project={value} key={index} />
        ))}
      </div>
    </div>
  );
}
