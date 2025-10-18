// function add(num1, num2){
//     // return num1 + num2;
//     let result =  num1 + num2;
//     // console.log(result);
//     return num1 + num2
// }

// let result = add(10,20)
// console.log("result",result);
//-----------------------------------------------------------------
// EX.
// function isLoggedIn(username) {
//     if (!username) {
//         console.log("please enter username");
//         return
//     }
//     console.log(`Hello, ${username} welcome to company`);
// }
// isLoggedIn("ram");
//------------------------------------------------------------------------------------------------------------------------------
// SPREAD:
// function calculate(val1,val2,...all){
//     console.log(val1);
//     console.log(val2);
//     console.log(all);
// }
// calculate(100,200,300,400,500,600,700)
//------------------------------------------------------------------------------------------------------------------------------
// PASSING AN OBJECT TO A FUNCTION:
// 1
// function return_object(getObj) {
//     return getObj
// }
// let obj = { id: 10, name: "ram", salry: 10000 }
// let obj2 = { id: 11, name: "hmmm", salry: 250000 }
// console.log(return_object(obj));
// console.log(return_object(obj2));
//-----------------------------------------------------------------
// // 2
// let obj = { id: 101, name: "ram" }
// function returnObject(a) {
//     return a
// }
// console.log(returnObject(obj));
// console.log(returnObject({ id: 102, name: "sita" }));
// -----------------------------------------------------------------
//PASSING AN ARRAY TO FUNCTIONS:
// 1
// let array1 = [1, 2, 3, 4, 5]
// function returnArray(getArray) {
//     console.log(getArray[3]);
// }

// returnArray(array1)
// returnArray([10, 20, 30, 40, 50])
//------------------------------------------------------------------------------------------------------------------------------
// SCOPE:
// ex1.
// 1.global scope=>var
// 2.local scope => let, const

// const a = 10;
// let b = 20;
// var c = 30;
// if (true) {
//     const a = 100;
//     let b = 200;
//     var c = 300;
//     console.log(a);      //local scope
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
//-----------------------------------------------------
// ex2.
// NOTE:child can use variables which are declared in parent, but parent can't using variables which eclared inside child.
// if (true){
//     let a = 10;
//     if (true) {
//         let b = 100;
//         console.log(a);
//         console.log(b);      
//     }
//     console.log(a);
//     console.log(b);
// }
//-----------------------------------------------------
// NESTED SCOPE:
// ex1.
// function outer(){
//     let a = 10;
//     let b = 20;
//     console.log("outer : ",a);
//     console.log("outer : ",b);
//     function inner(){
//         let x = 11;
//         let y = 22;
//         console.log("outer : ",a);
//         console.log("inner",x);
//         console.log("inner",y);

//     }
//     inner()
//     console.log("inner",x);      //parent function cannot use child variables
// }
// outer()
//---------------------------------------------------
// NOTE:when we just declarea function then we can call it before a function declaration.
// console.log(addOne(4));
// function addOne(num1){
//     return ++num1
// }
//--------------------------------------------------
// NOTE:when we assign a function to a variable then we cannot call this function before declaration
// let addition = function (num1) {
//     return ++num1
// }
// console.log(addition(2));
//---------------------------------------------------------------------------------------------------------------------------------------------------

// this. keyword:
// ex1:inside an object
// let user = {
//     username : "ram",
//     salary : 10000,
// welcomeMsg:function(){
//     console.log(`${this.username} , welcome to the website`); 
//     console.log(this);
// }
// }
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()
//----------------------------------------------------
// 2.inside function:
//  function welcomeMsg(){
//         console.log(this);
//     }
// welcomeMsg()
//---------------------------------------------------------------------------------------------------------------------------------------------------
// ARROW FUNCTION:
// ex1.
// let add = (n1,n2) =>{return n1 + n2}
// let add = (n1,n2) =>(n1 + n2)
// let add  =>({name:"ram"})
// console.log(add(2,4));
//----------------------------------------------------

// let user = [{ id: 101, name: "ram", sal: 1000 },
// { id: 102, name: "hind", sal: 2000 }
// ]
// let display = user.find(i => i.name == "ram")
// console.log(display);
//---------------------------------------------------------------------------------------------------------------------------------------------------
// IIFE :Immediately Invoked Function Expressions.
// ex1:normal function.
// (function DB(username="user"){
//     console.log(`${username} is logged in `);
// })(username="Ram");
//----------------------------------------------------
// 2.arrow function.
// ((database="user") => ( console.log(`${database} connetced successfully`)))("raam");
//----------------------------------------------------
// let user = (database) => ( console.log(`${database} connetced successfully`))
// user("raam");
//----------------------------------------------------
// let addition = (no1,no2)=>(console.log(`addition of ${no1} and ${no2} is :${no1+no2} `))
// addition(10,20)
//----------------------------------------------------
// let add = (no1,no2)=>{console.log(`addition of ${no1} and ${no2} is :${no1+no2}`)}
// (add(10,20));
//----------------------------------------------------
// IIFE:immediately invoked function expression.
// (function isLoggedIn( username = "user") {
//     console.log(`${username} is logged in`);
// })("Ram");
// //----------------------------------------------------
// ((username="user")=>(console.log(`${username} is logged in`)))()
//---------------------------------------------------------------------------------------------
//TO CHECK ARRAY IS EMPTY OR NOT:
// let array = []
// if (array.length===0){
//     console.log("array is empty.....");
// }
//----------------------------------------------------
//TO CHECK OBJECT IS EMPTY OR NOT:
// let obj = {id : 101,name : "ram"}
// if (Object.keys(obj).length===1){
//     console.log("obj is empty.....");

// }
// console.log(Object.keys(obj));
//----------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------

// FINAL PRACTICE:

// let user = { name: "ram", password: "ram123" }

// let i = 0
// let id = setInterval(() => {
//     console.log(user);
//     i++
//     if (i === 4) {
//         clearInterval(id)
//     }
// }, 1000)
