import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function Body() {
  //conponent lvl states
  const [foodArr, setFoodArr] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  //testing
  // const [arr, setArr] = useState([1, 4, 3, 5]);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setFoodArr(data.meals))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
    // setArr(arr.sort(() => Math.random() - 0.5));
    // console.log(arr);
  }, []);

  const Item = (
    <div className="main">
      <Loading />
      {foodArr.map((obj) => {
        const { idMeal: id, strMeal: name, strMealThumb: url } = obj;
        return (
          <div key={id} className="food-item">
            <img src={url} alt={name} />
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );

  return <>{foodArr ? Item : <Loading />}</>;
}

export default Body;
