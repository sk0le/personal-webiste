import Button from "../../components/elements/Button";

export default function HomePage() {
  return (
    <div
      className="max-w-screen-xl w-full h-full 
                 min-h-[90vh] flex flex-col lg:flex-row px-6 sm:px-12 
                 xl:px-0 py-6 lg:py-0 justify-evenly lg:justify-between 
                 items-center"
    >
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-5xl text-indigo-600 font-extrabold text-center lg:text-left">
          Full Stack Developer
        </h1>
        <h3 className="text-xl font-semibold pt-2 pb-4 dark:text-gray-100 text-gray-900 text-center lg:text-left">
          Working with React, Next and Node
        </h3>
        <div className="flex items-center flex-col sm:flex-row">
          <Button>See my projects</Button>
          <a className="ml-0 mt-2 sm:mt-0 sm:ml-4 dark:text-gray-300 text-gray-700 font-medium cursor-pointer">
            Contact
          </a>
        </div>
      </div>
      <img
        src="/home.svg"
        alt="home"
        className="max-w-xl xl:max-w-2xl w-full ml-8 xl:ml-0"
      />
    </div>
  );
}
