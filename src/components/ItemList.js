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
  let sum = 0;

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
    <div className="flex">
      <div>
        {items.map((i) => (
          <div
            key={i.card.info.id}
            className={
              theme === "dark"
                ? "p-2 m-2 border-gray-200 border-b-2 flex justify-between text-left flex"
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
        ))}
      </div>
      {location.pathname === "/cart" && (
        <div
          className={
            theme === "dark" ? "w-4/12 text-zinc-200" : "w-4/12 text-black"
          }
        >
          {items.map((item) => {
            sum = sum + item.card.info.price / 100;
          })}
          Total: {sum}
        </div>
      )}
    </div>
  );
};

export default ItemList;
