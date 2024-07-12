import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

export default function Body() {
  const [data, setData] = useState(resObj);

  function handleClick() {
    setData((data) => data.filter((data) => data.info.avgRating > 4));
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {data.map((resData) => (
          <RestaurantCard resData={resData} key={resData.info.id} />
        ))}
      </div>
    </div>
  );
}
