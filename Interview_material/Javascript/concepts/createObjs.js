// 7 Different ways to create objects

// 1. Object literals Or Object initializer
let obj = {
  name: "shridhar",
  printname: function () {
    console.log("my name is -", this.name);
  },
};
// console.log(obj.printname())

// 2. Object.create() method

let car = {
  model: "BMW",
  color: "white",
};

let electricCar = Object.create(car);
// console.log(electricCar.model);

// 3. Object Constructor
let s1 = new Object();
// console.log(s1,"s1")

// 4 .function Constructor

function Employee(name, age) {
  (this.name = name), (this.age = age);
}
let employee1 = new Employee("shridhar", 25);
// console.log(employee1)

// 5. function Constructor with prototype
function Person() {}
Person.prototype.name = "shridhar";

let p1 = new Person();
// console.log(p1.name)

// 6. Es6 class syntax

class People {
  constructor(name) {
    this.name = name;
  }
  Name = function () {
    return console.log(this.name, "name");
  };
}

let per1 = new People("shree");
// console.log(per1.Name());


// 7. singleTon method

 let o1 =new function(){
    this.name = "priyanka"
 }
 console.log(o1.name)
