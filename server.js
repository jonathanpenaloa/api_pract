const express = require("express")

const app = express();
const port = 4001;

const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      price: 25000
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2021,
      color: "Blue",
      price: 22000
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      year: 2023,
      color: "Red",
      price: 35000
    },
    {
      id: 4,
      brand: "Chevrolet",
      model: "Camaro",
      year: 2020,
      color: "Black",
      price: 30000
    }
  ];

  
app.get("/", function(req, res) {
    res.send(cars)
})

app.get("/search/:string", function(req, res) {
    const stringFromParams = req.params.string;
    let car = cars.find(car => car.brand === stringFromParams)
    res.send(car)
})

app.get("/random", function(req, res) {
    const randomIdx = Math.floor(Math.random() * cars.length)
    res.send(cars[randomIdx])
})

app.get("/*", function(req, res) {
    res.send("Try another page")
})
app.listen(port, () => {
    console.log("running on port", port)
})


