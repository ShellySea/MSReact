import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { ThemeContext } from "../contexts/ThemeContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-slate-800 m-4 p-4 w-[250px] rounded-lg bg-gray-100 text-slate-50 hover:bg-slate-400 hover:text-black"
          : " m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      }
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3
        className={theme === "dark" ? "font-bold " : "font-bold text-lime-700"}
      >
        {name}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
