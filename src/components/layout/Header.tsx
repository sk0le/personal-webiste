import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../elements/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeToDark();
    } else {
      setThemeToLight();
    }
  }, []);

  const setThemeToDark = () => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    setDark(true);
    localStorage.theme = "dark";
  };

  const setThemeToLight = () => {
    document.getElementsByTagName("html")[0].classList.remove("dark");
    setDark(false);
    localStorage.theme = "light";
  };
  return (
    <div className="sticky top-0 z-10 w-full flex justify-center items-center dark:bg-gray-900 bg-white transition duration-500">
      <header className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center w-full h-20 px-6 sm:px-12 xl:px-0">
        <div className="flex h-full justify-between items-center w-full">
          <h1 className="text-4xl font-bold cursor-pointer text-indigo-600">
            Amel Islamovic
          </h1>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 dark:text-gray-100 text-gray-900 block lg:hidden cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 dark:text-gray-100 text-gray-900 block lg:hidden cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } lg:shadow-none shadow-2xl dark:bg-gray-900 bg-white transition duration-500 lg:flex items-start 
            lg:items-center flex-col lg:flex-row justify-between
             mg:max-w-lg w-full top-20 px-6 sm:px-12 lg:px-0 pb-4 pt-2 lg:pt-0
              lg:pb-0 lg:bg-transparent z-50 lg:z-0 fixed lg:position-unset`}
        >
          <a className="dark:text-gray-100 text-gray-900 mb-2 pl-1 lg:pl-0 lg:mb-0 font-medium cursor-pointer transition  hover:text-indigo-700">
            Home
          </a>
          <a className="dark:text-gray-100 text-gray-900 mb-2 pl-1 lg:pl-0  lg:mb-0 font-medium  cursor-pointer transition  hover:text-indigo-700">
            Skills
          </a>
          <a className="dark:text-gray-100 text-gray-900 mb-2 pl-1 lg:pl-0  lg:mb-0 font-medium  cursor-pointer transition  hover:text-indigo-700">
            About
          </a>
          <a className="dark:text-gray-100 text-gray-900 mb-2 pl-1 lg:pl-0  lg:mb-0 font-medium  cursor-pointer transition  hover:text-indigo-700">
            Projects
          </a>
          <a
            onClick={() => {
              router.push("/blog");
            }}
            className="dark:text-gray-100 text-gray-900 mb-2 pl-1 lg:pl-0  lg:mb-0 font-medium  cursor-pointer transition  hover:text-indigo-700"
          >
            Blog
          </a>
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-100 cursor-pointer mb-2 pl-1 lg:pl-0  lg:mb-0"
              viewBox="0 0 20 20"
              onClick={setThemeToLight}
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900 cursor-pointer mb-2 pl-1 lg:pl-0  lg:mb-0"
              viewBox="0 0 20 20"
              onClick={setThemeToDark}
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
          <Button>Contact</Button>
        </div>
      </header>
    </div>
  );
}
