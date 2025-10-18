// let numbers = [3,5,4,7,10,14,6,45,54];
// const Size = numbers.length;
// console.log("size :"+Size);
// for(let i=0; i<Size;i++)
// {
//     console.log('array : '+numbers[i]);


// }
//--------------------------------------------------------------------
// console.log("using for .......of ");
// for(let n of numbers){
//     console.log(n);
// }
// ------------------------------------------------------------------------------------------------------------------
// ARRAY OBJECTS :
// let products=[
//     {is:101,name:'ram',price:100,qty:12},
//     {is:102,name:'karan',price:200,qty:10},
//     {is:103,name:'hemant',price:300,qty:16},
//     {is:104,name:'aman',price:400,qty:13},
//     {is:105,name:'vaibhav',price:500,qty:22}
// ];

// how to point specific product
// let p = products[2]
// let names = products[2].name
// console.log(p);
// console.log("name :"+names);

// for loop for display each object
// for(let product of products){
//     console.log(product);
// }
// ------------------------------------------------------------------------------------------------------------------

// FUNCTIONS:
// 1.FILTER: filtering the data as per conditions.
// ex 1.
// let p_name = [1,4,3,23,54,76,43,80,10,70];
// let data = p_name.filter(i => i>70);
// console.log(data);

// ex2.
// let products=[
//     {is:101,name:'ram',price:10,qty:12},
//     {is:102,name:'karan',price:15,qty:100},
//     {is:103,name:'hemant',price:100,qty:16},
//     {is:104,name:'aman',price:70,qty:130},
//     {is:105,name:'vaibhav',price:500,qty:220}
// ];
// let data = products.filter(i => i.price>50 && i.qty>50);
// console.log(data);
//--------------------------------------------------------------------

// 2.MAP:modifies the data.
// ex1:to print squares

// let numbers = [10,20,3,5];
// let sq = numbers.map(num => num*num)
// console.log(sq);

// ex2:convert name into uppercase.
// let products=[
//     {is:101,name:'ram',price:10,qty:12},
//     {is:102,name:'karan',price:15,qty:100},
//     {is:103,name:'hemant',price:100,qty:16},
//     {is:104,name:'aman',price:70,qty:130},
//     {is:105,name:'vaibhav',price:500,qty:220}
// ];
// let upper = products.map(product => product.name.toUpperCase());
// console.log(upper);

//--------------------------------------------------------------------
// ex3.appling rs.5 tax on price
// let products=[
//     {is:101,name:'ram',price:10,qty:12},
//     {is:102,name:'karan',price:15,qty:100},
//     {is:103,name:'hemant',price:100,qty:16},
//     {is:104,name:'aman',price:70,qty:130},
//     {is:105,name:'vaibhav',price:500,qty:220}
// ];
// let updated_product = products.map(i => {i.price += 10;return i;} );
// console.log(updated_product);
//--------------------------------------------------------------------
// q1.
// let list_obj = [
//     {
//         name:"vaibhav",
//         age:19,
//         sal:2000
//     },
//     {
//         name:"ram",
//         age:109,
//         sal:234000
//     },
//     {
//         name:"raj",
//         age:9,
//         sal:1340
//     }
// ];
// let filter_list_obj = list_obj.filter(emp => emp.name == 'ram')
// console.log("filter list :",filter_list_obj);

// let up_list_obj = list_obj.map(i => {i.sal += 5
//     return i} )
// console.log("updated list",up_list_obj);
// ------------------------------------------------------------------------------------------------------------------
// 1.STRING:
// 1.backtiks:
// let name = "vaibhav"
// let age = 20
// console.log(`hi my name is ${name} and my age is ${age}`);  
// -------------------------------------------------------------
// STRING FUNCTIONS:
// let gameName = new String("Battlegrounds")
// let newStr = "    hello wrold     "
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName[-1]);
// console.log(gameName.length);
// console.log(gameName.indexOf("t"));
// console.log(gameName.charAt(2));
// console.log(gameName.substring(-10,9));
// console.log(gameName.slice(-7,10));
// console.log(newStr.trim());
// console.log(newStr.replace("wrold","vaibhav"));
// console.log(gameName.replace("grounds","maidan"));
// console.log(gameName.includes("round"));
// console.log(gameName.substring());

// ------------------------------------------------------------------------------------------------------------------

// Q1. wap to reverse a string
// function rev(gameName) {
//     let size = gameName.length;
//     let result = "";
//     for (let i = size - 1; i >=0; i--) {
//         result = result + gameName[i];
//     }
//     console.log(result);
// }

// rev(gameName = "Battlegrounds")
// ------------------------------------------------------------------------------------------------------------------

// 2.NUMBER:
// const num = new Number(10765430000)
// let conversion =(num.toString());
// console.log("str :",conversion,typeof conversion);
// console.log(typeof num);

// console.log(num.toFixed(2));

// const num = new Number(10075.6176543)
// console.log(num.toPrecision(5));

// console.log(num.toLocaleString("en-IN"));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// MATH:
// console.log("absilute no.:",Math.abs(-4));
// console.log("roundup no.:",Math.round(4.5));
// console.log("ceiling no.:",Math.ceil(4.01));
// console.log("floor no.:",Math.floor(4.9));
// console.log("maximum no.:",Math.max(2,3,4,32,5,4));
// console.log("minimum no.:",Math.min(2,3,4,5,1,4,32));
// -----------------------------------------------------------------------------------------------

// ROUND:
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}=`,Math.floor(Math.random() * 10) + 1);
// }
// -------------------------------------------------------------------------------

// let min = 1;
// let max = 20;
// for(let i=0;i<20;i++){
//     console.log(`${i}=`,Math.floor(Math.random() * (max - min + 1)) + min);
// }

// let min = 3
// let max = 15
// for(let i = 0;i<10;i++){
// console.log(Math.floor(Math.random()*(max - min + 1)+min));
// }
// -----------------------------------------------------------------------------------------------

// let date = new Date()
// console.log(typeof date);

// console.log(date.toString());//Sun Jul 20 2025 16:56:08 GMT+0530 (India Standard Time)
// console.log(date.toDateString());//Sun Jul 20 2025
// console.log(date.toLocaleString());//7/20/2025, 4:55:17 PM
// console.log(date.toLocaleDateString());//7/20/2025
// console.log(date.toLocaleTimeString());//4:55:17 PM
// console.log(date.toTimeString());//16:58:01 GMT+0530 (India Standard Time)

// let newdate = new Date(2025 , 1 , 10);
// console.log(newdate.toDateString());//Mon Feb 10 2025
// console.log(newdate.toLocaleString());//2/10/2025, 12:00:00 AM
// console.log(newdate.toLocaleDateString());//2/10/2025


//  console.log(new Date().toString());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ARRAY:
// const arr = new Array(1,2,3,"vaibhav",true);
// console.log(arr);
// console.log(arr[3]);
// console.log(typeof arr);
// -----------------------------------------------------------------
// SLICE:
// let arr1 = [1,2,3,4,5,6,7,8];
// console.log("org",arr1);
// console.log("slice:",arr1.slice(2,4));
// console.log("org",arr1);
// -----------------------------------------------------------------
// SPLICE:
// console.log("org",arr1);
// console.log("splice:",arr1.splice(3,6));
// console.log("org",arr1);
// -----------------------------------------------------------------
// CONCATINATION:It returns a new array.does not do changes on reference .
// let arr = new Array("ram","karan","bajarang","samay","hind")
// let arr1 = new Array("rahul","hemant")
// console.log("org",arr);
// console.log("org1",arr1);
// console.log(arr.concat(arr1));
// console.log("concT",arr);
// -----------------------------------------------------------------
// SPREAD:same as concate but it can take arguments more then two also.
// let arr = new Array("ram","karan","bajarang","samay","hind")
// let arr1 = new Array("rahul","hemant")
// console.log([...arr,...arr1]);
// -----------------------------------------------------------------
// FLAT:Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let numArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(numArr.flat(Infinity));
// -----------------------------------------------------------------
// this is to check given data is an array or not.
// console.log(Array.isArray("hitesh"));
// -----------------------------------------------------------------
// FROM:It Creates an array from an iterable object.
// console.log(Array.from("hitesh"));
// -----------------------------------------------------------------
// OF:returns a new array from a set of elements.
// let num1 = 100;
// let num2 = 200;
// let num3 = 300;
// console.log(Array.of(num1,num2,num3));

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// FINAL PRACTICE:

// let userOne = {
//     name : "ram",
//     age : 20
// }

// let userTwo = userOne;
// userTwo["name"] = "sita"
// console.log(userOne);
// console.log(userTwo);

// -----------------------------------------------------------------
// let numOne = 10
// let numTwo = numOne;

// numTwo = 200

// console.log(numOne);
// console.log(numTwo);
// -----------------------------------------------------------------

// let arr1 = [1,2,3,4]
// let arr2 = arr1;

// console.log(arr2[2] = 10);

// console.log(arr1);
// console.log(arr2);
// -----------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// let products = [
//     { is: 101, name: 'ram', price: 10, qty: 12 },
//     { is: 102, name: 'karan', price: 15, qty: 100 },
//     { is: 103, name: 'hemant', price: 100, qty: 16 },
//     { is: 104, name: 'aman', price: 70, qty: 130 },
//     { is: 105, name: 'vaibhav', price: 500, qty: 220 }
// ];

// let data = products.map((i) => { return i.name.toUpperCase(); })
// data = products.filter((i) => { if (i.price > 60) { return i } }).map((i) => { i.price += 100; return i })
// console.log(data);

// -----------------------------------------------------------------
// let string = "Battlegrounds"

// console.log(string.length);
// let rev = "";

// for (let i = 0; i < string.length; i++) {
//     rev = string[i] + rev;
// }
// console.log(rev);
// -----------------------------------------------------------------

// -----------------------------------------------------------------

