import React from "react";
import { Card } from "../card/card";
import "./card-list.styles.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.cars.map((cars) => (
        <Card key={cars.id} cars={cars} />
      ))}
    </div>
  );
};
