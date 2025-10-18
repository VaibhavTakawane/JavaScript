// VARIABLES:
// var v=11
// var v=22
// let a =10 
// let a = 20
// console.log(v);
// console.log(a);
// -------------------------------------------------------
// const accId = 101;
// let accEmail = 'vaibhav@gmail.com';
// let accState;
// console.table([accId,accEmail,accState])
// console.log("----------------------------------------==");
// console.log(accId);
// console.log(accEmail);
// console.log(accState);

// ---------------------------------------------------------
// DATA TYPES:
// 1.primitive : string, number, null, undefined, bigInt, boolean, symbol
// let number = 10.98
// let string = "10.655"
// let bool = true

// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof bool);

// ---------------------------------------------------------
// 2.NON PREMITIVE (REFERENCE): array, object, function
// let arr = ["ram","aman","karan","vaibhav"];
// let obj = {
//     name:"vaibhav",
//     age:22,
//     marks:70
// };
// function fun(a,b) {
//     c = a + b;
//     return c
// }

// console.log(arr);
// console.log(obj);
// console.log(fun(40,5));
// console.log( typeof arr);
// console.log(typeof obj);
// console.log(typeof fun);
// ----------------------------------------------------------------------------------------------------------------

// CONVERSION OPERATIONS:
// 1.number to string:
// let score= 100
// console.log(typeof score);
// console.log(score);
// console.log("---------------------------------------------------------");
// let StrNum = String(score)
// console.log(StrNum);
// console.log(typeof StrNum);
// ------------------------------------------------------

// 2.string to number:
// let score= "100asdf"
// console.log(score);
// console.log(typeof score);
// console.log("---------------------------------------------------------");
// let NumStr = Number(score)
// console.log(typeof NumStr);     //o/p=> number
// console.log(NumStr);            //o/p=> NaN
// ------------------------------------------------------

// 3.str to bool
// let score= null
// console.log(score);
// console.log(typeof score);
// console.log("---------------------------------------------------------");
// let StrBool = Boolean(score)
// console.log(typeof StrBool);     
// console.log(StrBool);     
// ----------------------------------------------------------------------------------------------------------------

// let sym = Symbol("hello")
// console.log(sym);
// console.log(typeof sym );
// ----------------------------------------------------------------------------------------------------------------
// let sym = Symbol()
// let user = {
//     userId : 101,
//     userName : "ram",
//     userSalary : 1000,
//     [sym] : "apple"

// }
// console.log(typeof user[sym]);
// console.log(user[sym]);
// console.log(user["userName"]);


// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------


// FINAL PRACTICE :

// let sym = Symbol()
// let obj = {
//     name : "ram",
//     age:10,
//     [sym]:123456
// }

// console.log(obj["name"]);
// console.log(obj[sym]);
// console.log(typeof obj[sym]);
// console.log(typeof sym);
