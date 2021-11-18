import React from "react";

// function Greet() {
//   return <h1>Hello, Nikhil!</h1>;
// }

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>HeroName: {heroName} </h2>
    </div>
  );
};

export default Greet;

//Named -> We have to consider the very same function
//Import as {Greet} from '../location'

//For default, we can specify any names
