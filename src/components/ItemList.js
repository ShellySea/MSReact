import { useContext } from "react";
import { ITEMS_URL } from "../utils/constants";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";
import { addItem } from "../utils/cartSlice.js";
import { useLocation } from "react-router-dom";

const ItemList = (props) => {
  const items = props.items;
  console.log(props.dummy);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const location = useLocation();

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {items.map(
        (i) => (
          <div
            key={i.card.info.id}
            className={
              theme === "dark"
                ? "p-2 m-2 border-gray-200 border-b-2 flex justify-between text-left"
                : "p-2 m-2 border-gray-200 border-b-2 flex justify-between text-left"
            }
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{i.card.info.name}</span>
                <span> ₹ - {Number(i.card.info.price) / 100}</span>
              </div>
              <p className="text-xs">{i.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <img
                className="w-full"
                alt="res-logo"
                src={ITEMS_URL + i.card.info.imageId}
              />
              {location.pathname === "/cart" ? (
                <button
                  className={
                    theme === "dark"
                      ? "border border-black rounded-b-lg bg-slate-800 text-zinc-100 w-full items-center shadow-lg"
                      : "border border-black rounded-b-lg text-green-800 w-full items-center shadow-lg"
                  }
                  onClick={() => handleRemoveItem(i)}
                >
                  Remove
                </button>
              ) : (
                <button
                  className={
                    theme === "dark"
                      ? "border border-black rounded-b-lg bg-slate-800 text-zinc-100 w-full items-center shadow-lg"
                      : "border border-black rounded-b-lg text-green-800 w-full items-center shadow-lg"
                  }
                  onClick={() => handleAddItem(i)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        )
        // console.log(i.card.info)
      )}
    </div>
  );
};

export default ItemList;
