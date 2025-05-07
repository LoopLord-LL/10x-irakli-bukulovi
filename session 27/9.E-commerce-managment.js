function ECommerceProduct(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

ECommerceProduct.prototype.applyDiscount = function (percent) {
  this.price -= this.percent * (percent / 100);
};
ECommerceProduct.prototype.checkStock = function (stock) {
  if (stock > 0) {
    console.log(`${this.name} is in stock (${stock} items)`);
  } else {
    console.log(`${this.name} is out of stock`);
  }
};

function ElectronicsProduct(name, price, category, warrantyPeriod) {
  ECommerceProduct.call(this, name, price, category);
  this.warrantyPeriod = warrantyPeriod;
}
// ................