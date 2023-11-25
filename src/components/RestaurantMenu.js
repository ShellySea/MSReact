import Shimmer from "./Shimmer";
import { useParams, useNavigate } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const navigate = useNavigate();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center my-4">
      <h1 className="font-bold my-6 text-2xl">Name: {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.id}
          data={category.card.card}
        />
      ))}
      <br />
      <button
        className="border-solid border-2 border-indigo-600  bg-pink-100"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default RestaurantMenu;
