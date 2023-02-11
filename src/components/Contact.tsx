import { motion } from "framer-motion";
export default function Contact() {
  return (
    <div className="bg-black text-gray-100 w-full flex justify-center items-center px-6 py-12">
      <div className="max-w-6xl w-full h-full flex items-center justify-between">
        <motion.div
          initial={{ translateX: "-100px" }}
          whileInView={{ translateX: "0px", transition: { duration: 1 } }}
        >
          <h1 className="text-4xl font-inter font-bold">Get in touch!</h1>
          <p className="mt-2">
            Feel free to contact me for any kinds of question.
          </p>
        </motion.div>
        <motion.form
          initial={{ translateX: "100px" }}
          whileInView={{ translateX: "0px", transition: { duration: 1 } }}
          className="flex flex-col flex-1 justify-center items-center space-y-2"
        >
          <input
            className="bg-transparent w-full max-w-md border-gray-100 border outline-none py-2 px-6 rounded-md focus:border-red-600"
            placeholder="Name..."
          />
          <input
            className="bg-transparent w-full max-w-md border-gray-100 border outline-none py-2 px-6 rounded-md focus:border-red-600"
            type="email"
            placeholder="Email..."
          />
          <textarea
            placeholder="Message..."
            className="bg-transparent w-full max-w-md min-h-[10rem] max-h-[15rem] border-gray-100 border outline-none py-2 px-6 rounded-md focus:border-red-600"
          />
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4 },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="bg-white rounded-full text-black px-10 py-3"
          >
            Send Message
          </motion.button>

          {/* <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
              }}
              stroke="#16a34a"
              fill="none"
              d="M 7 2 C 4.199219 2 2 4.199219 2 7 L 2 34 C 2 36.800781 4.199219 39 7 39 L 34 39 C 36.800781 39 39 36.800781 39 34 L 39 9.8125 L 37 12 L 37 34 C 37 35.699219 35.699219 37 34 37 L 7 37 C 5.300781 37 4 35.699219 4 34 L 4 7 C 4 5.300781 5.300781 4 7 4 L 33.40625 4 L 35.09375 2.09375 C 34.695313 2.09375 34.398438 2 34 2 Z M 36.25 5.34375 L 18.9375 24.59375 L 10.65625 17.25 L 9.34375 18.75 L 18.34375 26.75 L 19.09375 27.40625 L 19.75 26.65625 L 37.75 6.65625 Z M 41 11 L 41 13 L 43 13 C 44.699219 13 46 14.300781 46 16 L 46 43 C 46 44.699219 44.699219 46 43 46 L 16 46 C 14.300781 46 13 44.699219 13 43 L 13 41 L 11 41 L 11 43 C 11 45.800781 13.199219 48 16 48 L 43 48 C 45.800781 48 48 45.800781 48 43 L 48 16 C 48 13.199219 45.800781 11 43 11 Z"
            />
          </motion.svg> */}
        </motion.form>
      </div>
    </div>
  );
}
