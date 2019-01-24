import React, { Component } from "react";
import { Card } from 'antd';

const BeerCard = (props) =>{
  return(
  <div>
    <Card
      title={props.name}
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
    <img src={props.thumbnail} height="300px" alt="" />
      <p>{props.abv}</p>
      <p>{props.ibu}</p>
      <p>{props.description}</p>
    </Card>
  </div>
  )
};
export default BeerCard;