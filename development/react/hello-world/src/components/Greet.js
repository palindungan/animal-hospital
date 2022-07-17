import React from "react";

// function component without using es6
// function Greet() {
//     return (<h1>Hello Rizkika</h1>);
// }

//// ---------------

// function component using es6
const Greet = (props) => {
  //   console.log(props);

  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

//// ---------------

// export const Greet = () => <h1>Hello Rizkika 3</h1>; // function component using es6
