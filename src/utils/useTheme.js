// import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

// const useTheme = () => {
//   const [theme, setTheme] = useState("light");

//   function toggleTheme() {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }

//   return { currentTheme: theme, toggleTheme };
// };

// export default useTheme;

export default function useTheme() {
  return useContext(ThemeContext);
}
