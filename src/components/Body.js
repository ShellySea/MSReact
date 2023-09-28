import RestaurantCard from "./RestaurantCard";
import myData from "../utils/mockData";

// Functional component
const Body = () => {
  return (
    <div className="res-container">
      {myData.map((restaurant) => (
        <RestaurantCard resData={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default Body;
