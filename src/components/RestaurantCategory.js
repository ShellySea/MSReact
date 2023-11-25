import { useState } from "react";
import { ITEMS_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;

  const handleClick = (e) => {
    console.log(e.target);
    props.setShowIndex();
    console.log(props.showItems);
    // if (props.showItems) {
    //   setShowItems(false);
    // } else {
    //   setShowItems(true);
    // }
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

        {props.showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
