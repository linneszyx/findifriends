import React from "react";
const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green hover-bg-light-yellow dib br2 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="people" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
