import {
  faCode,
  faCropSimple,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
export default function Skills() {
  const ref = useRef(null);

  const designRef = useRef<null | HTMLDivElement>(null);
  const devRef = useRef<null | HTMLDivElement>(null);
  const shellRef = useRef<null | HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const designSpring = useSpring(0);
  const devSpring = useSpring(0);
  const shellSpring = useSpring(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // @ts-ignore
    if (designRef.current) {
      // designRef.current.style.opacity = `${latest - 0.1}`;
      designSpring.set((latest - 1) * 100);
    }
    if (devRef.current) {
      // devRef.current.style.opacity = `${latest - 0.1}`;
      devSpring.set(Math.abs((latest - 1) * 100));
    }
    if (shellRef.current) {
      shellSpring.set(Math.abs((latest - 1) * 100));
      // shellRef.current.style.opacity = `${latest - 0.1}`;
    }
  });

  return (
    <div
      ref={ref}
      id="skills"
      className="w-full scroll-m-96 h-full px-6 overflow-hidden py-16 flex bg-white justify-center items-center lg:space-x-6"
    >
      <motion.div
        ref={designRef}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        style={{ translateX: designSpring }}
        className="bg-black max-w-xs  shadow-2xl w-full h-full rounded-md text-white flex flex-col items-center justify-start py-6 px-6"
      >
        <motion.div
          whileHover={{
            rotate: 90,
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faCropSimple} className="text-xl" />
        </motion.div>
        <h1 className="mt-4 text-xl font-medium">Design</h1>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          egestas pharetra consectetur. Morbi in tincidunt justo. Suspendisse
          rhoncus, nisi vel accumsan semper, tortor diam aliquet est, at
          faucibus purus tellus eget tellus. Fusce augue ante, maximus ac quam
          ac, molestie sagittis nisl.
        </p>
      </motion.div>
      <motion.div
        ref={devRef}
        style={{ translateY: devSpring }}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        className="bg-black max-w-xs shadow-2xl  w-full h-full rounded-md text-white flex flex-col items-center justify-start py-6 px-6"
      >
        <motion.div
          whileHover={{
            rotate: 90,
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faCode} className="text-xl" />
        </motion.div>
        <h1 className="mt-4 text-xl font-medium">Development</h1>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          egestas pharetra consectetur. Morbi in tincidunt justo. Suspendisse
          rhoncus, nisi vel accumsan semper, tortor diam aliquet est, at
          faucibus purus tellus eget tellus. Fusce augue ante, maximus ac quam
          ac, molestie sagittis nisl.
        </p>
      </motion.div>
      <motion.div
        style={{ translateX: shellSpring }}
        ref={shellRef}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        className="bg-black max-w-xs shadow-2xl w-full  h-full rounded-md text-white flex flex-col items-center justify-start py-6 px-6"
      >
        <motion.div
          whileHover={{
            rotate: 90,
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faTerminal} className="text-xl" />
        </motion.div>
        <h1 className="mt-4 text-xl font-medium">CLI</h1>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          egestas pharetra consectetur. Morbi in tincidunt justo. Suspendisse
          rhoncus, nisi vel accumsan semper, tortor diam aliquet est, at
          faucibus purus tellus eget tellus. Fusce augue ante, maximus ac quam
          ac, molestie sagittis nisl.
        </p>
      </motion.div>
    </div>
  );
}
