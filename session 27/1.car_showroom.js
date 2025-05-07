const car = {
  brand: "Toyota",
  model: "Corola",
  year: 2022,

  getInfo: function () {
    return `${this.brand}, ${this.model}, ${this.year}`;
  },
};

console.log("Info: ", car.getInfo());

console.log("Brand: ", car.brand);

car.model = "Prius";
console.log(car.model);

delete car.model;

console.log(car);
