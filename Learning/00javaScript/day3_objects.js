//OBJECT LITERALS:
// const sym = Symbol("key1");
// console.log(sym);

// const obj = 
//     {
//         name: "ram",
//         "full name": "vaibhav takawane",
//         age: 10,
//         [sym]: "mysymbol"
//     }

// console.log(obj);
// console.log(obj["full name"]);
// console.log(obj["age"]);
// console.log(obj[sym]);
// console.log(typeof obj[sym]);
//------------------------------------------------------------
// FREEZE:
// obj.age=20;
// Object.freeze(obj)
// obj.age=50;
// console.log(obj);
//---------------------------------------------------------------------------------------------------------------------------------------------------
// NESTED OBJECTS:
// let regUser = {
//     email:"abc@gmail.com",
//     userName:{
//         userFullName:{
//             name:"ram",
//             age:10
//         }
//     }
// }
// console.log(regUser.userName.userFullName);
//------------------------------------------------------------
// CONCATINATION:
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// // 1
// let obj3 = {obj1,obj2}
// console.log(obj3);
// console.log(typeof obj3);
// // 2:assign:
// let obj4 = Object.assign(obj1,obj2)
// console.log(obj4);
// console.log(typeof obj4);
// // 3.SPREAD:
// let obj5 = {...obj1,...obj2}
// console.log(obj5);
// console.log(typeof obj5);
//------------------------------------------------------------
// ACCESSING ARRAY OBJECTS:
// const user = [
//     {id:1,name:"ram"},
//     {id:2,name:"aman"},
//     {id:3,name:"karan"}
// ]
// console.log(user);
// console.log(user[1]);
// console.log(user[0].name);
//------------------------------------------------------------
// OBJECT FUNCTIONS:
// const user =  {id:1,name:"ram"};

// console.log(Object.keys(user));     //[ 'id', 'name' ]
// console.log(Object.values(user));   //[ 1, 'ram' ]
// console.log(Object.entries(user));  //[ [ 'id', 1 ], [ 'name', 'ram' ] ]
// console.log(user.hasOwnProperty("name"));   //true

//------------------------------------------------------------
// DESTRUCTURING:
// let course = {
//     cName: "js",
//     price: 1000,                                      //***************************
//     instructor: "Raam"
// }
// let { instructor, cName } = course
// console.log(cName);
// console.log(instructor);
//------------------------------------------------------------

//------------------------------------------------------------

// let user =  {
//     name :"ram",
//     age : 20,
//     isAvail : false
// }
// let {username = user.name, isAvail} = user
// console.log(username);


//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------

// FINAL PRACTICE:

// const user = { id: 1, name: "ram" };
// user.sal = 12345
// user.password = { encrypt: false, isAvail: true }
// console.log(Object.keys(user.password));

// console.log(Object.hasOwnProperty("name"));


// for (const [k, v] of Object.entries(user.password)) {
//     console.log(`keys = ${k} and valuse = ${v}`);
// }

// ------------------------------------------------------------

let arr = []

// condition ? true statement : false statement
arr.length===0 ?  console.log(`array is empty`) : console.log(`length of array is ${arr.length}`);











