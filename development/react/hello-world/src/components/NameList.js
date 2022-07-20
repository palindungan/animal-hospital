import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Rizkika",
      skill: "Frontend",
    },
    {
      id: 2,
      name: "Zakka",
      skill: "Backend",
    },
    {
      id: 3,
      name: "Palindungan",
      skill: "Fullstack",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
