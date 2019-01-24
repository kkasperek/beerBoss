import React, { Component } from "react";
import './style.css';
import { Card, Divider, Icon } from "antd";

const BeerCard = props => {

  const { Meta } = Card;
  return (

      <Card
        style={{ width: 500 }}
        title={props.name}
        cover={
          <img className="beerimg" alt="beerimage" src={props.thumbnail} />
        }
        actions={[
          <p>ABV: {props.abv}</p>,
          <p>IBU: {props.ibu}</p>,
          <Icon type="star" />
        ]}
      >
        <Divider orientation="left">{props.tagline} </Divider>
        <Meta description={props.description} />
      </Card>

  );
};
export default BeerCard;
