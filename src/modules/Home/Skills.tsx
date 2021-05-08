export default function Skills() {
  return (
    <div className="min-h-[50vh]h-full w-full flex flex-col justify-center items-center py-8 px-4">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-5xl text-indigo-600 font-bold">Skills</h1>
        <div className="w-12 h-1 bg-indigo-600"></div>
      </div>
      <div className="flex h-auto flex-col md:flex-row items-center">
        <div className="max-w-[256px] h-auto flex flex-col mr-0 md:mr-4 justify-center items-center px-4 py-8 mt-4 bg-indigo-100 dark:bg-gray-800  rounded-md">
          <h1 className="text-2xl dark:text-gray-100  text-gray-900 mb-4">
            Back End
          </h1>
          <p className="text-md dark:text-gray-300 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci
            metus, dapibus ac mollis eget, porta non nisl. Pellentesque lacus
            turpis, faucibus vel nisl nec, varius pulvinar odio.{" "}
          </p>
        </div>
        <div className="max-w-[256px]  h-auto flex flex-col justify-center items-center px-4 py-8 bg-indigo-600 rounded-md">
          <h1 className="text-2xl text-gray-100 mb-4">Front End</h1>
          <p className="text-md text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci
            metus, dapibus ac mollis eget, porta non nisl. Pellentesque lacus
            turpis, faucibus vel nisl nec, varius pulvinar odio.{" "}
          </p>
        </div>
        <div className="max-w-[256px] h-auto flex flex-col justify-center items-center px-4 py-8 mt-0 md:mt-4 bg-indigo-100 dark:bg-gray-800  rounded-md">
          <h1 className="text-2xl dark:text-gray-100  text-gray-900 mb-4">
            Front End
          </h1>
          <p className="text-md dark:text-gray-300 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci
            metus, dapibus ac mollis eget, porta non nisl. Pellentesque lacus
            turpis, faucibus vel nisl nec, varius pulvinar odio.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
