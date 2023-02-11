import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<null | string>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedId]);

  return (
    <div className="min-h-screen w-full h-full bg-gray-100 flex justify-center flex-col px-6 py-16 items-center">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <motion.h1
          className="text-4xl font-black font-inter"
          whileInView={{ translateX: "0px", transition: { duration: 1 } }}
          initial={{ translateX: "-50px" }}
        >
          Projects
        </motion.h1>
        <Link href="https://github.com/sk0le" target={"_blank"}>
          <motion.svg
            whileInView={{ translateX: "0px", transition: { duration: 1 } }}
            initial={{ translateX: "50px" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            className={"outline-none border-none cursor-pointer"}
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </motion.svg>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-3 grid-rows-3 gap-10 w-full max-w-4xl">
        <motion.div
          layoutId={"0"}
          onClick={() => {
            setSelectedId("0");
          }}
          whileInView={{ translateX: "0px", transition: { duration: 0.6 } }}
          initial={{ translateX: "-50px" }}
          className="bg-white w-full h-full col-span-2 row-span-2 rounded-md shadow-sm hover:shadow-xl transition-all"
        ></motion.div>
        <motion.div
          layoutId={"1"}
          onClick={() => {
            setSelectedId("1");
          }}
          whileInView={{ translateX: "0px", transition: { duration: 0.8 } }}
          initial={{ translateX: "80px" }}
          className="bg-white w-full h-64 row-span-1  rounded-md shadow-sm hover:shadow-xl transition-all"
        ></motion.div>
        <motion.div
          layoutId={"2"}
          onClick={() => {
            setSelectedId("2");
          }}
          whileInView={{ translateX: "0px", transition: { duration: 0.9 } }}
          initial={{ translateX: "60px" }}
          className="bg-white w-full h-full row-span-2  rounded-md shadow-sm hover:shadow-xl transition-all"
        ></motion.div>
        <motion.div
          layoutId={"3"}
          onClick={() => {
            setSelectedId("3");
          }}
          whileInView={{ translateX: "0px", transition: { duration: 0.7 } }}
          initial={{ translateX: "-80px" }}
          className="bg-white w-full h-full col-span-2  rounded-md shadow-sm hover:shadow-xl transition-all"
        ></motion.div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="min-h-screen h-full w-full fixed top-0 left-0 bg-white overflow-hidden flex justify-center items-start py-12 px-6"
            layoutId={selectedId}
            style={{
              zIndex: "9999999999999999",
            }}
          >
            <div className="max-w-6xl w-full h-full flex">
              <div className="w-full flex justify-between ">
                <h1>Hello</h1>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedId(null);
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
