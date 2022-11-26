import React, { useState } from "react";

const initState = ["Rizkika", "Zakka"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const clickHandler = () => {
    // persons.push("AAA");
    // persons.push("BBB");
    // setPersons(persons);

    const newPersons = [...persons];
    newPersons.push("AAA");
    newPersons.push("BBB");
    setPersons(newPersons);
  };

  console.log("Render ArrayUseState");

  return (
    <div>
      <button onClick={clickHandler}>Render</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
