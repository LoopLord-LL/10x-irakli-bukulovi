function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

Car.prototype.age = function () {
  const curretYear = new Date().getFullYear();
  return curretYear - this.year;
};

const toyota = new Car("Prius", 2003);
console.log(`Toyota brand: ${toyota.brand}, age is: ${toyota.age()}`);

const mercedes = new Car("W211", 1998);
console.log(`Mercedes brand: ${mercedes.brand}, age is: ${mercedes.age()}`);
