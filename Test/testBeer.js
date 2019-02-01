
// grab the user model
var Beer = require('../models/Beer');

// create a new user
var testBeer = Beer({
    name: "Todd The Axe Man, Surly",
    tagline: "American India Pale Ale",
    abv: 7.20,
    ibu: 40,
    image: "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_289004",
    description: "Double dry-hopping with Citra and Mosaic hops creates intense tropical fruit and citrus aromas. Brewed with Golden Promise malt and just a hint of haze, this beer finishes rich and dry."  
});

// save the testbeer
testBeer.save(function(err) {
  if (err) throw err;

  console.log('test beer created!');
});
module.exports = testBeer;