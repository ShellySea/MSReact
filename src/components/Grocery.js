import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.js";

const Grocery = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-800 h-screen" : "bg-white h-screen"
      }
    >
      <h2 className={theme === "dark" ? " text-zinc-100" : "text-black"}>
        This is a lazily loaded Grocery page!
      </h2>
    </div>
  );
};

export default Grocery;
