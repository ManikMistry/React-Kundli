import React, { useEffect, useState } from "react";

function UseEffect() {
  const API = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch(API);
      console.log(response);
      if (response.ok) {
        const APIdata = await response.json();
        setData(APIdata);
        console.log(APIdata);
      } else {
        console.error("Error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt="..." style={{ height: "100px" }} />
          <p>{item.rating.rate}</p>
        </div>
      ))}
    </>
  );
}

export default UseEffect;


// useEffect
/*
useEffect is a hook in React that enables you to perform side effects in your functional components.
Side effects can include things like data fetching.
*/

/*
--> The first argument to useEffect is a function containing the code you want to run for the side effect.
--> The second argument is an optional array of dependencies. If the dependencies array is empty, the effect will only run once when the component mounts.
If you include dependencies, the effect will run whenever any of the dependencies change.
--> The optional cleanup function returned by useEffect will be executed when the component is about to unmount.
*/