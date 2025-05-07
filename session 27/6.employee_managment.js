function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.getDetails = function (){
        return `Employee: ${this.name}, Salary: $${this.salary}`;
}
function Manager(name, salary, department) {
    Employee.call(this, name, salary)
}
// ....