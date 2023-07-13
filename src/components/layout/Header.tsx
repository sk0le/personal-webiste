import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();

  const { scrollY } = useScroll();
  const [haveShadow, setHaveShadow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setHaveShadow(false);
    }
    if (latest !== 0 && !haveShadow) {
      setHaveShadow(true);
    }
  });

  return (
    <motion.header
      animate={{ translateY: ["-100%", "10%", "0%"] }}
      transition={{ duration: 1 }}
      className={`z-[99999]  ${haveShadow ? "shadow" : ""} top-0 ${
        haveShadow ? "backdrop-blur-2xl" : "bg-gray-100"
      } w-full px-4 py-6 flex justify-center items-center`}
      style={{ backgroundColor: haveShadow ? "rgba(243, 244, 246, .6)" : "" }}
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
        <nav className="hidden sm:flex space-x-10 font-light text-sm">
          <motion.a
            href={"/#home"}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href={"/#skills"}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Skills
          </motion.a>
          <motion.a
            href={"/#projects"}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.a>
          <motion.a
            href={"/#contact"}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
