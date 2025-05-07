function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.makeSound = function () {
  console.log("Meow, Meow ... :DDD");
};

let animal = new Animal("Katushka", "Kata");
animal.makeSound();
