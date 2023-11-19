import Shimmer from "./Shimmer";
import { useParams, useNavigate } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="menu">
      <h3>Name: {name}</h3>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((menu) => (
          <li key={menu?.card?.info?.id}>
            {menu?.card?.info?.name} - Rs.{" "}
            {menu?.card?.info?.price / 100 ||
              menu?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default RestaurantMenu;
