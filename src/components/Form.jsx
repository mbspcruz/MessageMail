import { Routes, Route, useNavigate } from "react-router-dom";
import { forms } from "../constants";

const TheForm = ({ name, label }) => (
  <form className="w-full ax-w-lg">
    <div className="flex flex-wrap justify-center mb-2">
      <div className=" w-full mb-6 md:mb-0">
        <label
          className="block tracking-wide text-primary-25 text-xs mb-2"
          htmlFor="grid-first-name"
        >
          {name}
        </label>
        <input
          className="bg-transparent w-full text-gray-700 text-xs border-b border-primary-50 py-3 px-4 mb-3 leading-tight focus:outline-none focus:text-primary-25 focus:border-primary-100"
          id="grid-first-name"
          type="text"
          placeholder={label}
        />
      </div>
    </div>
  </form>
);

export default function Form() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-400 font-nunito w-full h-max-full flex justify-center md:p-32 p-8">
      <div className="bg-white rounded-md w-full md:w-1/2 p-12 h-fit shadow-md">
        <div className="flex justify-end">
          <button
            onClick={navigateHome}
            type="button"
            className="absolute bg-primary-95 rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="lg:h-6 lg:w-6 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="mt-14 text-3xl font-bold text-primary-25">Sign Up</h2>
        <div className="mt-10">
          {forms.map((form, index) => (
            <TheForm key={form.id} index={index} {...form} />
          ))}
        </div>{" "}
        <div className="flex justify-end shink-0 mt-10">
          <button className=" px-6 py-4 bg-primary-500 rounded-md text-white font-bold flex rounded hover:bg-primary-100">
            Next
            <svg
              className="pl-2 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
