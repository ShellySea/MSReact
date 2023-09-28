import RestaurantCard from "./RestaurantCard";
import myData from "../utils/mockData";
import { useState } from "react";

// Functional component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(myData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          disabled={listOfRestaurants.length === myData.length}
          onClick={() => {
            setListOfRestaurant(myData);
          }}
        >
          Remove the filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
