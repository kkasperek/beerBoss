import React, { Component } from "react";
import "antd/dist/antd.css";
import "./app.css"
import BeerCard from "./Components/BeerCard";
import { Button, Icon } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beertitle: "beer title",
      beers: [],
      randombeer: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handle button click for random beer
  handleClick() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ beers: data });
      });
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">Random Beer Generator</h3>
        <Button onClick={this.handleClick}  size="large" >
          Find my drink
          <Icon type="right" />
        </Button>

        {/* generate beer list */}
        <div className="results">
          {this.state.beers.map((beer, _id) => {
            return (
              <BeerCard
                key={_id}
                id={beer.id}
                name={beer.name}
                thumbnail={beer.image_url}
                abv={beer.abv}
                ibu={beer.ibu}
                description={beer.description}
                tagline={beer.tagline}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
