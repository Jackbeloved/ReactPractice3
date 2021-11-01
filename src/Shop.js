import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [data, setData] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    const items = await data.json();
    console.log(items.data);
    setData(items.data);
  };
  return (
    <div>
      {data.map(data => (

        <h1 key={data.itemId}>
          <Link to={`/shop/${data.itemId}`}>{data.item.name}</Link>
        </h1>

      ))}

    </div>
  );
}

export default Shop;
