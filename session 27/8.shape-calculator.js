function Shape(type) {
  this.type = type;
}

function Circle(radius) {
  this.type = "Circle";
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * radius * radius;
  };
}
function Rectangle(width, height) {
  this.type = "Rectangle";
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return width * height;
  };
}
const circle = new Circle(5);
const rectangle = new Rectangle(6, 8);

console.log();console.log(`${circle.type} Area: ${circle.getArea().toFixed(2)}`);    // Circle area: 78.54
console.log(`${rectangle.type} Area: ${rectangle.getArea()}`);
