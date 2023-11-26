import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Cart = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-800 h-screen" : "bg-white h-screen"
      }
    >
      <h3 className={theme === "dark" ? " text-zinc-100" : "text-black"}>
        This is Cart Page!
      </h3>
    </div>
  );
};
export default Cart;
