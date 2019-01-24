import React, { Component } from "react";
import { Card, Divider, Icon } from 'antd';


const BeerCard = (props) =>{
    const { Meta } = Card;
    return(
<Card
    style={{ width: 500 }}
    title={props.name}
    cover={<img className="beerimg" alt="beerimage" src={props.thumbnail}  />}
    actions={[<p>ABV: {props.abv}</p>, <p>IBU: {props.ibu}</p>, <Icon type="star" theme="filled" />]}
    // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    
    <Divider orientation="left">{props.tagline} </Divider>
     <Meta description={props.description}  />
  </Card>
    )
};
export default BeerCard;