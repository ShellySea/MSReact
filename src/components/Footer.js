import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white"
      }
    >
      Footer
    </div>
  );
};

export default Footer;
