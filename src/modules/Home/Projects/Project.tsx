import { useState } from "react";
import Button from "../../../components/elements/Button";
import { Repo } from "../../../lib/types/Repos";
import ProjectDescription from "./ProjectDescription";

interface PageProps {
  project: Repo;
}

export default function Project({ project }: PageProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-sm w-full h-auto px-8 py-8 shadow-xl dark:bg-gray-800 rounded-md">
        <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-900">
          {project.name}
        </h1>
        <p className="mt-2 mb-4 dark:text-gray-300 text-gray-700">
          {project.description}
        </p>
        <div className="flex justify-left  items-center">
          <Button onClick={() => setIsOpen(true)}>View more</Button>
          <a className="ml-4 cursor-pointer dark:text-gray-300 text-gray-700">
            Github
          </a>
        </div>
        {isOpen && (
          <ProjectDescription setIsOpen={setIsOpen} project={project} />
        )}
      </div>
    </>
  );
}
