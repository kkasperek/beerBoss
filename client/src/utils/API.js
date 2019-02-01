import axios from "axios";

export default {
  getRandomBeer: function(req, res) {
    console.log(res);
    return axios.get("https://api.punkapi.com/v2/beers/random");
  },

  // Saves beer to the database
  saveBeer: function(beerData) {
    return axios.post("/api/beer", beerData);
  }
};
