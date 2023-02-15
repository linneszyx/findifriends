import React from "react";
import Card from "../components/Card";
const CardList = ({ people }) => {
  const cardArray = people.map((user, i) => {
    return (
      <Card key={i}
      id={people[i].id}
       name={people[i].name}
        email={people[i].email} />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;
