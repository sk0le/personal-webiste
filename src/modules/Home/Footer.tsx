export default function Footer() {
  return (
    <div
      id="contact"
      className="min-h-[60vh] h-full w-full flex justify-center items-center flex-col bg-indigo-700"
    >
      <div className="flex-1 w-full flex flex-col md:flex-row justify-center items-center px-4 py-8">
        <form className="max-w-lg w-full flex flex-col items-start justify-center mb-8 md:mr-16">
          <h1 className="text-4xl text-gray-100 font-extrabold mb-4">
            Contact
          </h1>
          <input
            placeholder="Your name"
            className="px-6 py-2 w-full mb-2 bg-gray-900 rounded-md focus:outline-none border border-transparent focus:border-gray-500 text-gray-100"
          />
          <input
            placeholder="Your email"
            className="px-6 py-2 w-full mb-2 bg-gray-900 rounded-md focus:outline-none border border-transparent focus:border-gray-500 text-gray-100"
          />
          <textarea
            className="px-6 py-4 w-full mb-4 max-h-60 h-full bg-gray-900 rounded-md focus:outline-none border border-transparent focus:border-gray-500 text-gray-100"
            placeholder="Your message"
          ></textarea>
          <button className="text-gray-100 px-8 py-2 bg-gray-900 text-base font-medium rounded-md shadow-md transition hover:bg-gray-800 disabled:opacity-50 disabled:cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white  focus:ring-opacity-80">
            Contact
          </button>
        </form>
        <img src="/contact.svg" alt="contact" className="max-w-md w-full" />
      </div>
      <div className="min-h-[7vh] h-full w-full p-8 flex justify-center items-center bg-indigo-800">
        <p className="text-gray-100 text-xl font-medium">2022 Amel Islamovic</p>
      </div>
    </div>
  );
}
