import React from 'react'
// import {useEffect} from 'react';

const items = [
    { name: "Black leather handbag", category: "Bags" },
    { name: "Silver wristwatch", category: "Watches" },
    { name: "Red sports jersey", category: "Sports" },
    { name: "Aviator sunglasses", category: "Sunglasses" },
    { name: "Canvas backpack", category: "Bags" },
    { name: "Gold watch", category: "Watches" },
    { name: "Basketball", category: "Sports" },
    { name: "Round sunglasses", category: "Sunglasses" },
    { name: "Leather shoulder bag", category: "Bags" },
    { name: "Digital watch", category: "Watches" },
    { name: "Football", category: "Sports" },
    { name: "Cat-eye sunglasses", category: "Sunglasses" },
    { name: "Messenger bag", category: "Bags" },
    { name: "Smartwatch", category: "Watches" },
    { name: "Yoga mat", category: "Sports" }
  ];

function MultiFilter() {

async function getData(){
 let res = await fetch('items')
 let data = await res.json();
 console.log(data);
    }
    getData();
   
    // useEffect(() => {
    //     getData();
    // },[])
    return (
        <div>
            
            
        </div>
    )
}

export default MultiFilter
