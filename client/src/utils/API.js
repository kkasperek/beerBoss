import axios from "axios";

export default {
  getRandomBeer: function(req, res) {
    console.log(res);
    return axios.get("https://api.punkapi.com/v2/beers/random");
 
  }
};
