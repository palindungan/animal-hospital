import React from "react";
import Person from "./Person";

function NameList() {
  // const persons = [
  //   {
  //     id: 1,
  //     name: "Rizkika",
  //     skill: "Frontend",
  //   },
  //   {
  //     id: 2,
  //     name: "Zakka",
  //     skill: "Backend",
  //   },
  //   {
  //     id: 3,
  //     name: "Palindungan",
  //     skill: "Fullstack",
  //   },
  // ];
  // const personList = persons.map((person) => (
  //   <Person key={person.id} person={person}></Person>
  // ));
  // return <div>{personList}</div>;

  const names = ["Rizkika", "Zakka", "Palindungan", "Palindungan"];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return nameList;
}

export default NameList;
