import React, { useState } from "react";

const initState = {
  fName: "Rizkika",
  lName: "Zakka",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    // person.fName = "AAA";
    // person.lName = "BBB";
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.fName = "AAA";
    newPerson.lName = "BBB";
    setPerson(newPerson);
  };

  console.log("Obejct UseState Render");

  return (
    <div>
      <button onClick={changeName}>
        {person.fName} - {person.lName}
      </button>
    </div>
  );
};
