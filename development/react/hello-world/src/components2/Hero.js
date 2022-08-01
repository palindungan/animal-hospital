import React from "react";

function Hero({ heroName }) {
  if (heroName == "Joker") {
    throw new Error("this is not a hero!");
  }
  return (
    <div>
      <div>{heroName}</div>
    </div>
  );
}

export default Hero;
