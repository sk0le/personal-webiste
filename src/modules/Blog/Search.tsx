import Button from "../../components/elements/Button";

export default function Search() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center max-w-screen-lg w-full mb-8 px-4 lg:px-0">
      <input
        className="w-full px-4 md:px-8 py-2 bg-gray-900 dark:bg-gray-800 rounded-md sm:rounded-r-none focus:outline-none text-gray-100"
        placeholder="Blog to search, ex: How to start with React?"
      />
      <Button className="sm:rounded-l-none mt-2 sm:mt-0">Search</Button>
    </div>
  );
}
