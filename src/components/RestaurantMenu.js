import Shimmer from "./Shimmer";
import { useParams, useNavigate } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const navigate = useNavigate();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const { theme } = useContext(ThemeContext);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const setShowIndexProps = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div
      className={
        theme === "dark"
          ? "text-center p-4 bg-slate-900 text-zinc-100"
          : "text-center p-4"
      }
    >
      <h1 className="font-bold p-4 text-2xl">Name: {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndexProps(index)}
        />
      ))}
      <br />
      <button
        className={
          theme === "dark"
            ? "border-solid border-2 bg-slate-800 text-zinc-100 p-2 m-2"
            : "border-solid border-2 border-indigo-600  bg-pink-100"
        }
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default RestaurantMenu;
