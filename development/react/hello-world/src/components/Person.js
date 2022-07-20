import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        Hello my name is {person.name}. I am {person.age} years old. And i am{" "}
        {person.skill} developer
      </h2>
    </div>
  );
}

export default Person;
