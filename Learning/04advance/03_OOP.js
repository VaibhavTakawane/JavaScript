// EXAMPLAR OF CLASS:
// class Student {
//     constructor(name, age, sal) {
//         this.name = name;
//         this.age = age;
//         this.salary = sal;
//     }
//     greet() {
//         if (!this.salary) {
//             console.log(`hi ${this.name} your age is ${this.age}`);

//         } else {
//             console.log(`hi ${this.name} your age is ${this.age} and your salary is ${this.salary}`);
//         }
//     }
// }

// let s1 = new Student("ram", 100,1234567)
// let s2 = new Student("sita", 10)
// s1.greet()
// s2.greet()

//---------------------------------------------------------------------------

// NEW:
// function createProduct(name, price) {
//     this.name = name;
//     this.price = price;
// }

// createProduct.prototype.increment = function () {
//     this.price ++;
//     console.log(this.price);
// }

// createProduct.prototype.display = function(){
//     console.log(`the price is ${this.price}`);
// }

// const o1 = new createProduct("chai", 100);
// const o2 = new createProduct("code", 25);
// o1.increment()
// o1.display()
// o2.increment()
// o2.display()
//---------------------------------------------------------------------------

// PROTOTYPE:
// ex1:

// ex2:

// String.prototype.Givelength = function () {
//     console.log(`value of this is : ${this}`);
//     console.log(`length of ${this.trim()} is : ${this.trim().length}\n`);
// }

// "wert".Givelength()
// o1 = "ram     "
// o1.Givelength()
// o2 = "vaibhav     "
// o2.Givelength()
//-----------------------------------------------------------------------------------------------------------------------------------------------------

// CALL:

// function setUsername(username) {
//     this.username = username;
//     console.log("called");

// }
// function createUser(username, email, password) {
//     setUsername.call(this, username)
//     this.email = email
//     this.password = password
// }

// o1 = new createUser("ram", "ram@gmail.com", "ram123")
// console.log(o1);

//---------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------

// PRACTICE:
// P1:using prototype.

// function createUser(name, score) {
//     this.name = name;
//     this.score = score;
// }

// createUser.prototype.increment = function()  {
//     return this.score += 50;
// }
// createUser.prototype.print = function()  {
//     console.log(`score is ${this.score}`);

// }

// o1 = new createUser("ram", 100)
// console.log(o1);
// console.log(o1.increment());
// console.log(o1.print());

//---------------------------------------------------------------------------
// P2: using call and prototype.
// function setName(name) {
//     this.name = name
// }
// function product(name, price) {
//     setName.call(this, name)
//     this.price = price;
//     console.log(`product is ${this.name} and its price is : ${this.price}`);
// }
// product.prototype.increment_by_500 = function () {
//     this.price += 500;
//     console.log(`product is ${this.name} and its price is : ${this.price}`);
// }
// const o1 = new product("apple", 10000)
// const o2 = new product("banana", 20000)
// o1.increment_by_500()
// o2.increment_by_500()

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// CLASS:

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encr_pass() {
//         return `passwors is ${this.password}qwert`
//     }

//     updateUsername() {
//         return `username is ${this.name.toUpperCase()}`
//     }

// }

// const o1 = new User("ram", "ram@gmail.com", "ram@123", 100)
// console.log(o1);
// console.log(o1.encr_pass());
// console.log(o1.updateUsername());
//-----------------------------------------------------------------------------------------------------------------------------------------------------

// INHERITANCE: using super() keyword

// class bike {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     display() {
//         console.log(`the name of bike is ${this.name} and its price is ${this.price}`);
//     }
// }

// class kawasaki extends bike {
//     constructor(cName, year, name, price) {
//         super(name, price)
//         this.cName = cName;
//         this.year = year;
//     }
//     comp_display() {
//         console.log(`company name is ${this.cName}`);
//         console.log(`bike name is ${this.name}`);
//         console.log(`bike price is ${this.price}`);
//     }
// }

// let o1 = new bike("ninja", 400000)
// o1.display()
// let o2 = new kawasaki("ford", 2003, "bullet", 1234567)
// o2.comp_display()
// o2.display()

//---------------------------------------------------------------------------

// static(): we do not access functions directely.

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     static getId(){
//         return "your id is '123'"
//     }
//     display(){
//         return `name of student is ${this.name}`
//     }
// }

// const o1 = new User("vaibhav")
// console.log(o1.display());

// console.log(o1.getId());       // getting error=> TypeError: o1.getId is not a function

//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------