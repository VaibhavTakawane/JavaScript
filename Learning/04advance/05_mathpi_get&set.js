// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// ----------------------------------------------------------
// const user = {
//     name: "ram",
//     age: 20,
//     isAvailable: true,
//     salary: 1000
// }
// console.log('descriptor = ', user);

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, "name", {
//     // writable: false,
//     enumerable: false
// })

// user["name"] = "sita"

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
//---------------------
// for (const [key, value] of Object.entries(user)) {
// console.log(`${key} :::: ${value} `);
// }


//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

// GETTER AND SETTER METHODS :

// class User {
//     constructor(name, password) {
//         this.name = name
//         this.password = password
//     }
//     get name(){
//         return `${this._name.toUpperCase()}qwertyuiop`
//     }
//     set name(value){
//         this._name = value
//     }
//     get password(){
//         return `${this._password.toUpperCase()}qwertyuiop`
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const o1 = new User("ram", "abc")
// console.log(o1.name);
// console.log(o1.password);
// const o2 = new User("sita", "xyz")
// console.log(o2.name);
// console.log(o2.password);

//------------------------------------------------------------

// class Bike {
//     constructor(id, name) {
//         this.id = id
//         this.name = name
//     }

//     get id() {
//         return `${this._id}_qwerty`
//     }
//     set id(value) {
//         this._id = value
//     }
// }

// const o1 = new Bike(101,"zx10r")
// console.log(o1.id);
// console.log(o1.name);

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

// FINAL PRACTICE:

// 1.creating a class and inherit from another class.

class Student {
    constructor(rollNo, name, age) {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
    }
    display_std() {

        console.log(`the name of student is ${this.name} and its roll number is ${this.rollNo} and age is ${this.age}`);

    }
}

// let o1 = new Student(1, "ram", 20)
// let o2 = new Student(2, "sita", 19)
// o1.display_std()
// o2.display_std()

class Teacher extends Student {
    constructor(tName, Subject, name, rollNo, age) {
        super(rollNo, name, age);
        this.tName = tName;
        this.Subject = Subject;
    }
    display() {
        console.log(`the name of teacher is ${this.tName} and it's subject is ${this.Subject} `);

    }
}

let t1 = new Teacher("shirke", "Math", "vaibhav", 101, 20);
t1.display()
t1.display_std()



