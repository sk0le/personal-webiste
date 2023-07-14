import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type LinksProps = {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const Links = ({ setIsNavOpen }: LinksProps) => {
  return (
    <>
      <motion.a
        href={"/#home"}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavOpen(false)}
      >
        Home
      </motion.a>
      <motion.a
        href={"/#skills"}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavOpen(false)}
      >
        Skills
      </motion.a>
      <motion.a
        href={"/#projects"}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavOpen(false)}
      >
        Projects
      </motion.a>
      <motion.a
        href={"/#contact"}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavOpen(false)}
      >
        Contact
      </motion.a>
    </>
  );
};

export default function Header() {
  const router = useRouter();

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isNavOpen]);

  return (
    <motion.header
      className={`z-50 w-full  px-4 py-6 flex ${
        isNavOpen ? "flex-col" : "flex-row"
      } sm:flex-row justify-center items-center`}
    >
      <div className="w-full max-w-7xl flex justify-between items-center ">
        <motion.h1
          className="font-inter text-4xl font-black cursor-pointer"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            router.push("/");
          }}
        >
          ai
        </motion.h1>
        <div
          className={`HAMBURGER-ICON flex-col sm:hidden space-y-2 ${
            isNavOpen ? "hidden" : "flex"
          }`}
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
        </div>

        <nav className="hidden sm:flex space-x-10 font-light text-sm">
          <Links setIsNavOpen={setIsNavOpen} />
        </nav>
      </div>

      <nav
        className={`${
          isNavOpen ? "flex" : "hidden"
        } fixed top-0 right-0 bottom-0 flex-col px-10 py-6 justify-start items-center sm:hidden space-y-10 font-light h-screen bg-gray-100 z-[9999] text-sm`}
      >
        <div className={`${isNavOpen ? "flex" : "hidden"} sm:hidden`}>
          <div
            className="CROSS-ICON"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>

        <Links setIsNavOpen={setIsNavOpen} />
      </nav>
    </motion.header>
  );
}
