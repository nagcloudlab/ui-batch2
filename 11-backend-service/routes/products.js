var express = require('express');
var router = express.Router();

const products = [
  {
    id: 1,
    name: "laptop",
    price: 2000,
    description: "Dell laptop",
    image: "images/laptop.png"
  },
  {
    id: 2,
    name: "phone",
    price: 1000,
    description: "Samsung phone",
    image: "images/mobile.png"
  },

]

router.get('/', function (req, res, next) {
  // get from any source ( sql db, nosql db, file, etc.)
  res.json(products);
});

module.exports = router;
