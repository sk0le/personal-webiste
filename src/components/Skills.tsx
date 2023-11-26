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
      className="NO-X w-full scroll-m-96 h-full px-6  py-16 flex  bg-white justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6"
    >
      <div className="grid flex-cols-1 lg:grid-cols-3 gap-3">
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
            Explore a world of possibilities with my design expertise. From
            captivating visual identities to user-centric interfaces, I
            specialize in crafting unique and impactful designs that elevate
            your brand. Let&apos;s collaborate to bring your vision to life
            through thoughtful and visually stunning solutions.
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
            As a Next.js enthusiast and front-end developer, I specialize in
            creating seamless, high-performance web experiences. From crafting
            pixel-perfect user interfaces to optimizing website performance, I
            thrive on turning ideas into interactive and visually engaging
            realities. Let&apos;s embark on a journey where every line of code
            brings your vision to life.
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
            Step into the command line realm with me, where I navigate the
            digital landscape as a versatile developer with an experience on CLI
            and DevOps. From scripting automation to orchestrating deployments,
            I wield the power of command line tools to streamline processes and
            enhance efficiency. Join me in the world of code-driven operations,
            where every command paves the way for a seamless and robust
            development experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
