import React from 'react';

const foodILike = [
  {
   id:1,
   name:"kimchi",
   image:"https://cdn.pixabay.com/photo/2017/06/28/03/58/kimchi-2449656__340.jpg",
   rating:5
  },
   {
   id:2,
   name:"donkatu",
   image:"https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696__340.jpg",
   rating:4.9
  },
  {
   id:3,
   name:"bibimbab",
   image:"https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580__340.jpg",
   rating:4.8
  },
  {
   id:4,
   name:"kimbab",
   image:"https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864__480.jpg",
   rating:4.7
  }
];

function rendorFood(dish){
 return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function Food({name, picture}){
  return (
  <div>
    <h2>L Like {name}</h2>
    <img src={picture} alt={name} />
  </div>
  );
}

function App() {
  return  <div>
      {foodILike.map(rendorFood)}
    </div>
}

export default App;
