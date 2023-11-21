import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#80808038",
  borderRadius: "16px",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={styleCard}>
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 style={{ color: "green" }} className="font-bold">
        {name}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
