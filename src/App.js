import React from 'react';

function Food({fav}){
  return <h1>l like {fav}</h1>;
}
function App() {
  return  <div>
    <h1>helo!</h1>
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="samgiopsal" />
    <Food fav="chukumi" />
    </div>
}

export default App;
