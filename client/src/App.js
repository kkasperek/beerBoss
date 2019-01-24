import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      randombeer: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handle button click
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
      <div className="App">
        <h3>Get a Random Beer</h3>
        <button onClick={this.handleClick}>Click to Search!</button>

        {/* generate beer list */}
        {this.state.beers.map(beer => (
          <ul key={beer.id}>
            <li>{beer.name}</li>
            <li>{beer.tagline}</li>
            <img src={beer.image_url} height="300px" />
            <li> ABV: {beer.abv} </li>
            <li> IBU: {beer.ibu} </li>
            <li> Description: {beer.description} </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
