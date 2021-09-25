import React from 'react';

function Food({name, picture}){
  return (
  <div>
    <h2>L Like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const foodILike = [
  {name:"kimchi",
   image:"https://cdn.pixabay.com/photo/2017/06/28/03/58/kimchi-2449656__340.jpg"},
  {name:"donkatu",
   image:"https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696__340.jpg"},
  {name:"bibimbab",
   image:"https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580__340.jpg"},
  {name:"kimbab",
   image:"https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864__480.jpg"}
]

function App() {
  return  <div>
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
}

export default App;
