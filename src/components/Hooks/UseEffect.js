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
          <img src={item.image} alt="..." style={{height:"100px"}} />
          <p>{item.rating.rate}</p>
        </div>
      ))}
    </>
  );
}

export default UseEffect;
