import React, { Component } from "react";
import "antd/dist/antd.css";
import BeerCard from "./Components/BeerCard";
import { Button, Layout } from "antd";

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
    const stat = this.state.beers;
    return (
      <div className="container">
        <h3>Get a Random Beer</h3>
        <Button onClick={this.handleClick} type="primary">
          Click to Search!
        </Button>

        {/* generate beer list */}
        <div>
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
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
