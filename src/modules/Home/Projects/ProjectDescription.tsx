import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../../components/elements/Button";
import ReactMarkdown from "react-markdown";
import { Repo } from "../../../lib/types/Repos";
import { profileEnd } from "node:console";

interface PageProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: Repo;
}

export default function ProjectDescription({ setIsOpen, project }: PageProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const close = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };
  return (
    <div
      onClick={close}
      className="fixed inset-0 h-full w-full z-20 p-4 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <div
        id="overlay"
        className="bg-gray-50 dark:bg-gray-900 shadow-md scrollbar z-50  max-w-xl max-h-[600px] w-full h-auto px-8 py-8 overflow-auto rounded-md"
      >
        <div
          className="flex justify-between items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className="text-gray-700 dark:text-gray-400">
            Project built with:{" "}
            <strong className="text-indigo-600">{project.language}</strong>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 dark:text-gray-100 text-gray-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={close}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {project.readme && (
          <ReactMarkdown
            children={project.readme}
            className="prose dark:prose-dark prose-indigo"
          />
        )}
        <div className="mt-4">
          <Button
            onClick={() => {
              if (project.webiste) window.open(project.webiste, "_blank");
            }}
          >
            Webiste
          </Button>
          <a
            className="ml-4 dark:text-gray-100 text-gray-900 cursor-pointer"
            href={project.url}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
