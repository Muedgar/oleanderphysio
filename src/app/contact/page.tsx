import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/contact.css";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center">
      <h1 className="mt-10 mb-10 text-[2.5em] font-bold">Get In Touch</h1>

      <div className="w-[300px] h-fit rounded-lg border mb-10 flex flex-col p-4 justify-start items-start">
        <FontAwesomeIcon
          className="text-[1em] bg-green-400 p-4 rounded-md"
          icon={faMessage}
        />
        <p className="mt-4">Chat with our physiotherapists</p>
        <p className="text-slate-500">We are here help</p>
        <button className="bg-green-400 text-white p-2 mt-2 rounded-md shadow-sm shadow-black hover:shadow-lg">
          Chat With Us
        </button>
      </div>

      <h1 className="mt-10 mb-10 text-[2em] font-bold">Message Us</h1>
      <div className="w-[80%] h-fit rounded-lg border mb-10 flex flex-col p-4 justify-start items-start">
        <div className="w-full">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
