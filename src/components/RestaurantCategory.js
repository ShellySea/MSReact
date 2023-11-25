import { useState } from "react";
import { ITEMS_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(true);
  const { title, itemCards } = props.data;

  const handleClick = () => {
    // if (showItems) {
    //   setShowItems(false);
    // } else {
    //   setShowItems(true);
    // }
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
