import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Functional component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [sR, setSr] = useState("false");

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  let showNoRes = false;
  const noRestaurants = "No Restaurants Found!";

  useEffect(() => {
    fetchData();
    console.log("use effect called...");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data?.cards);
    setListOfRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    console.log("---list of rest---");
    console.log(listOfRestaurants);
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  const Loader = () => {
    return (
      <div className="loaderBody">
        <div className="loader"></div>
      </div>
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <span className="search">
          <input
            type="text"
            className="search-box"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                const result = listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchRestaurant.toLowerCase())
                );
                setFilteredRestaurants(result);
                if (searchRestaurant === "") {
                  setSr("false");
                  setFilteredRestaurants(listOfRestaurants);
                }
                if (result.length === 0) {
                  showNoRes = true;
                  setSr("true");
                }
              }}
            >
              Search
            </button>
          </span>
        </span>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          // disabled={listOfRestaurants.length === myData.length}
          onClick={() => {
            setFilteredRestaurants(listOfRestaurants);
          }}
        >
          Remove the filter
        </button>
      </div>
      <div className="res-container">
        {sR === "true" ? (
          <h3>No Restaurants Found!!</h3>
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} key={restaurant.info.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
