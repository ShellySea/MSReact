import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "bg-slate-800" : "bg-white"}>
      <h3 className={theme === "dark" ? " text-zinc-100" : "text-black"}>
        This is Contact Us Page!
      </h3>
    </div>
  );
};

export default ContactUs;
