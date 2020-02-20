import React, { Component } from "react";
import Card from "../card/card";
import "./cardList.css";
const CardList = props => {
  const { users } = props;
  return (
    <div className="card-list">
      {users.map(user => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  );
};

export default CardList;
