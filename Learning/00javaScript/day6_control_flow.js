// IF:
//IMPLESIT SCOPE:USING COMMAS (,) YOU CAN WRITE MULTIPLE LINES 
// let userLoggedIn = true
// if (userLoggedIn==true) console.log("user is logged in...."),console.log("HELLO");
//------------------------------------------------------------------------------------
// IF ELSE:
// let userLoggedIn = true
// if (userLoggedIn==1){
//     console.log("user is logged in.....");
// }
// else{
//     console.log("user is not logged in yet....");
// }
//------------------------------------------------------------------------------------
// IF ELSE IF:
// let temperature = 199.99;
// if (temperature<100){
//         console.log("temperature is less than 100");
//     }
//     else if(temperature<200){
//     console.log("temperature is less than 200");
// }
// else{
//         console.log(`temperature is ${temperature}`);
//     }
//------------------------------------------------------------------------------------
// SWITCH CASE:
// let number = 20;
// switch (number) {
//     case 1:
//         console.log("number is 1");
//         break;
//     case 2:
//         console.log("number is 2");
//         break;
//     case 3:
//         console.log("number is 3");
//         break;
//     default:
//         console.log(`"invalid number: ${number} "`);
//         break;
// }
//---------------------------------------
// let month = 9;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("febuary");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     default:
//         console.log("invalid month");
//         break;
// }
//------------------------------------------------------------------------------------
// NULLISH COALESCING OPERATOR (??) : NULL, UNDEFINED
// let val1;
// val1 = 10 ?? 20;
// val1 = undefined ?? null  ?? 20;
// val1 = null ?? 20;
// console.log(val1);
//---------------------------------------
// let val1;
// val1 = undefined ?? add(10,20);
// console.log(val1);

// function add(n1,n2){
//     return n1+n2;    
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// TERNARY OPERATOR (?) :
// SYNTAX => condition ? true_statements : false_statement
//-------------------
// ex 1:
// let rollNo = 101
// let cond = 80
// rollNo >= cond ? console.log(`roll number ${rollNo} is greater than ${cond}`) : console.log(`roll no ${rollNo} is less than ${cond}`);
//------------------------------------------------------------------------------------
// ex 2:
// let userStatus=1;
// userStatus ==true ? console.log(`user is logged in`) : console.log("user is not logged in");
//---------------------------------------------------------------------------------------------------------------------------------------------------------------


// this IN ARROW FUNCTION:
// (()=>(console.log(this,"hello")))'()
//---------------------------------------
// this IN NORMAL FUNCTION:
// function greet() {
//     console.log(this,"hi");
// }
// greet()