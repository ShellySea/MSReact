import { useContext } from "react";
import ItemList from "./ItemList";
import { ThemeContext } from "../contexts/ThemeContext";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;

  const { theme } = useContext(ThemeContext);

  const handleClick = (e) => {
    props.setShowIndex();
  };

  return (
    <div>
      <div
        className={
          theme === "dark"
            ? "w-6/12 mx-auto my-4 bg-slate-800 text-zinc-100 shadow-lg p-4"
            : "w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
        }
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {props.showItems && <ItemList items={itemCards} dummy={props.dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
