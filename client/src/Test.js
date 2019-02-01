import React from "react";
import axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.getBeer = this.getBeer.bind(this);
  }
  getBeer() {
    axios.get("/api/beer").then(res => {
      console.log(res.data);
    });
  }
  saveBeer(beerData) {
    axios.post("/api/beer", beerData).then(res => {
      console.log("saved");
    });
  }
  render() {
    return (
      <div className="container">
        this is a test
        <button onClick={() => this.getBeer()}>Database</button>
      </div>
    );
  }
}

export default Test;
