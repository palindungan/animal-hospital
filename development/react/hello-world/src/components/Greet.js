import React from "react";

// function component without using es6
// function Greet() {
//     return (<h1>Hello Rizkika</h1>);
// }

//// ---------------

// function component using es6
const Greet = (props) => {
  //   console.log(props);
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

//// ---------------

// export const Greet = () => <h1>Hello Rizkika 3</h1>; // function component using es6
