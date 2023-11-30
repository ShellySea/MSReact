import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-800 h-screen" : "bg-white h-screen"
      }
    >
      <h3
        className={
          theme === "dark"
            ? " text-zinc-100 font-bold p-4 m-4"
            : "text-black font-bold p-4 m-4"
        }
      >
        This is Contact Us Page!
      </h3>
      <form>
        <input
          type="text"
          className="border border-solid border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-solid border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-solid border-black p-2 m-2 bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
