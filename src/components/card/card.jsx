import React from "react";
import "./card.css";
const Card = props => {
  const { user } = props;
  return (
    <div className="card-container">
      <img
        className="user-img"
        src={`https://robohash.org/${user.id}?set=set2`}
      />
      <h2 className="user-name">{user.name}</h2>
      <div className="user-email">{user.email}</div>
    </div>
  );
};

export default Card;
