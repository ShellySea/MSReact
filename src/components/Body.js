import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ThemeContext } from "../contexts/ThemeContext";

// Functional component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [sR, setSr] = useState("false");

  const { theme } = useContext(ThemeContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  let showNoRes = false;
  const noRestaurants = "No Restaurants Found!";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    // console.log("---list of rest---");
    // console.log(listOfRestaurants);
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

  const onlineStatus = useOnlineStatus();

  function checkMode() {
    const theme = document.documentElement.className;
    return theme;
  }

  if (onlineStatus === false) {
    return <h1>Offline! Please check your internet connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={
        theme === "light" ? "bg-slate-300, text-black" : "bg-slate-900"
      }
    >
      <div className="filter flex">
        <span className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <span>
            <button
              className={
                theme === "dark"
                  ? "px-4 py-1 bg-slate-800 text-zinc-100 m-4 rounded-lg"
                  : "px-4 py-1 border border-black bg-gray-300 m-4 rounded-lg hover:bg-gray-400"
              }
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
        <div className="search m-4 p-4">
          <button
            className={
              theme === "dark"
                ? "px-4 py-1 m-4 rounded-lg  bg-slate-800 text-zinc-100"
                : "px-4 py-1 border border-black bg-gray-300 m-4 rounded-lg hover:bg-gray-400"
            }
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
            className={
              theme === "dark"
                ? "px-4 py-1 m-4 rounded-lg bg-slate-800 text-zinc-100"
                : "px-4 py-1 border border-black shadow-2xl bg-gray-300 m-4 rounded-lg hover:bg-gray-400"
            }
            // disabled={listOfRestaurants.length === myData.length}
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Remove the filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {sR === "true" ? (
          <h3>No Restaurants Found!!</h3>
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                  key={restaurant.info.id}
                />
              ) : (
                <RestaurantCard resData={restaurant} key={restaurant.info.id} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
