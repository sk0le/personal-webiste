import {
  faCode,
  faCropSimple,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div
      id="skills"
      className="NO-X w-full scroll-m-96 h-full px-6 overflow-hidden py-16 flex flex-col lg:flex-row bg-white justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6"
    >
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        whileInView={{ translateX: "0px", transition: { duration: 1 } }}
        initial={{ translateX: "-50px" }}
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
        whileInView={{ translateY: "0px", transition: { duration: 0.5 } }}
        initial={{ translateY: "50px" }}
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
        whileInView={{ translateX: "0px", transition: { duration: 0.5 } }}
        initial={{ translateX: "50px" }}
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
