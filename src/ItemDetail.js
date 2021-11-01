import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {
    

    useEffect(() => {
        fetchItem();
        console.log(match);

    }, []);

    const [itemData, setItemData] = useState({
        ratings: {},
        images: {},
    });
    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        // console.log(match.params.id);
        const itemss = await fetchItem.json();
        setItemData(itemss.data.item);

        // console.log(item.data.item.name);
    };


    return (
        <div>

            <h1>{itemData.name}</h1>
            {/* {console.log('====='+item.name)} */}
            {console.log(itemData)}
            <img src={itemData.images.icon} alt="" />
            {itemData.rarity}
            {itemData.ratings.avgStars}
            {/* {item.images.icon} */}

        </div>
    );
}

export default ItemDetail;
