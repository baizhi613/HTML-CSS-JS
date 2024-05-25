var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串

typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object

// 声明一个字符串变量answer并赋值为"It's alright"
var answer="It's alright";
// 声明一个字符串变量answer并赋值为"He is called 'Johnny'"
var answer="He is called 'Johnny'";
// 声明一个字符串变量answer并赋值为'He is called "Johnny"'
var answer='He is called "Johnny"';

// 声明一个新的数组变量cars，并使用索引添加元素到数组中
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";

// 声明一个新的数组变量cars，并使用初始化数组时直接添加元素到数组中
var cars=new Array("Saab","Volvo","BMW");

// 直接声明一个包含元素的数组变量cars
var cars=["Saab","Volvo","BMW"];

// 定义一个名为 person 的对象，包含 firstname、lastname 和 id 三个属性
var person={firstname:"John", lastname:"Doe", id:5566};
// 从 person 对象中获取 lastname 属性的值并赋给 name 变量
name=person.lastname;
// 从 person 对象中使用方括号语法获取 lastname 属性的值并赋给 name 变量
name=person["lastname"];

// 为变量carname创建一个新字符串对象
var carname = new String;

// 为变量x创建一个新数字对象
var x = new Number;

// 为变量y创建一个新布尔对象
var y = new Boolean;

// 为变量cars创建一个新数组对象
var cars = new Array;

// 为变量person创建一个新对象
var person = new Object;

// 此处不能调用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 函数内可调用 carName 变量
}

var carName = " Volvo";
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}

// 此处可调用 carName 变量
 
function myFunction() {
    carName = "Volvo";
    // 此处可调用 carName 变量
}

// 在类级别添加注释
class Runoob {
    // 构造函数，用于初始化name和url属性
    constructor(name, url) {
      this.name = name;
      this.url = url;
    }
  }
  let site = new Runoob("菜鸟教程",  "https://www.runoob.com");

// 未命名/匿名类
let Runoob = class {
    constructor(name, url) {
      this.name = name;
      this.url = url;
    }
  };
  console.log(Runoob.name);
  // output: "Runoob"
   
  // 命名类
  let Runoob = class Runoob2 {
    constructor(name, url) {
      this.name = name;
      this.url = url;
    }
  };
  console.log(Runoob.name);
  // 输出: "Runoob2"

class Runoob {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
   
let runoob = new Runoob("菜鸟教程", 2018);
  document.getElementById("demo").innerHTML =
  "菜鸟教程 " + runoob.age() + " 岁了。";

  class Animal {
    constructor(name) {
      this.name = name;
    }
   
    eat() {
      console.log(this.name + " is eating.");
    }
  }
   
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
   
    bark() {
      console.log(this.name + " is barking.");
    }
  }
   
  const dog = new Dog("Buddy", "Labrador");
  dog.eat();
  dog.bark();