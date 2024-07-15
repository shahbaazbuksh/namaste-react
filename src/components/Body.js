import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Body() {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57400&lng=88.31910&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setData(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick() {
    setData((data) => data.filter((data) => data.info.avgRating > 4));
  }

  function handleSearch() {
    const filteredList = data.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  }

  return (
    <>
      {data.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <button className="filter-btn" onClick={handleClick}>
              Top Rated Restaurant
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurant.map((resData) => (
              <RestaurantCard resData={resData} key={resData.info.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
