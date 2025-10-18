// ITERATION:
// 1 FOR LOOP:
// let array = [1,2,3,4,"ram",3,21,"ramesh"]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//------------------------------------------------------------------------------------
// for (let i = 1; i <= 5 ; i++) {
//     console.log(`table of  ${i}`);
//     for (let j = 1; j <= 5 ; j++) {
//         console.log(`${i} * ${j} = ${i*j} `);
//     }
// }
//------------------------------------------------------------------------------------
// let myarray = ["ram", "karan", "hind", "aman"]
// for (let i = 0; i < myarray.length; i++) {
//     console.log(myarray[i]);
// }
//------------------------------------------------------------------------------------

// BREAK:ends the current scope/loop.
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`5 is detected`);
//         break;
//     }
//     console.log(i);
// }
//------------------------------------------------------------------------------------
// CONTINUE: skips the current iteration and curser goes to the increment in for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         console.log(`5 is detected`);

//         continue;
//     }
//     console.log(i);
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//2.WHILE LOOP:
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i+=1;
// }
//------------------------------------------------------------------------------------
// TABLE USING WHILE LOOP:

// function table(num) {
//     let i = 1;
//     let j = 1;
//     console.log(`table of ${num} :`);
//     while (i <= 10) {
//         while (j <= 10) {
//             console.log(`${num}*${j} = ${j * num}`);
//             j++;
//         }
//         i++;
//     }
// }
// table(1500)
//------------------------------------------------------------------------------------
// WHILE LOOP ON ARRAY:
// let myarray = ["ram", "karan", "hind", "aman"]
// let i = 0;
// while(i<myarray.length){
//     console.log(myarray[i]);
//     i++;
// }
//------------------------------------------------------------------------------------
// 3.DO WHILE LOOP: when you want to execute atleast a statement then we use while loop.
// let score = 100;
// do {
//     console.log(`score is : ${score}`);
//     if (score == 5) {
//         break
//     }
//     score++;
// } while (score < 10)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// SPECIAL LOOPS ON ARRAY:
// FOR OF:
// ex1.
// let string = "hello wrold"
// for (const str of string) {
//     if (str == "o" || str == " ") {
//         continue
//     }
//     console.log(str); 
// }
//------------------------------------------------------------------------------------
// ex2.we does not apply for of on Object.
// let obj = {id : 101, name :"ram", sal:1000 }
// for (const [key, value] of obj) {
//     console.log(key, value);    
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// MAP

// 1.it is an object.
// 2.it is an ordered collection of key-value pairs.
// 3.it does not allows duplicate keys.
//4. map is not iterable.

// syntax to creating map =>  const map_name = new Map()

// const map = new Map()
// map.set('id',101)
// map.set("name","ram")
// map.set("sal",10000)
// map.set("sal",10044400)
// console.log(map);

//for of on the map:

// for (const [i,j] of map) {
//     console.log(i,"=>",j);
// }

//------------------------------------------------------------------------------------
// const map = new Map()
// map.set('id',101)
// map.set("name","ram")
// map.set("email","ram@gmail.com")        //set => adds or updates key-value pairs
// map.set("sal",10000)

// console.log(map.get("name"));        //get => retrives value of given key
// console.log(map.has("sal"));         //has => checks if key exists or not 
// console.log(map.delete("email"));    //delete => removes the given key
// console.log(map.clear());            // clesr => removes the all key value pairs from the map
// console.log(map);
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2.FOR IN : IT GIVES THE KEYS OF THE ITERATOR 
// ex 1:
// let course = {
//     cName: "js",
//     price: 1000,
//     instructor: "Raam"
// }
// for (const key in course) {
//     console.log(key,"=>",course[key]); 
// }
//------------------------------------------------------------------------------------
// ex2:
// let arr = [12,23,32,34,33,2,34,443,]
// for (const i in arr){
//     console.log(arr[i]); 
// }
//------------------------------------------------------------------------------------
// ex3: we can't apply for in on map. because map is not iterable.
// const map = new Map()
// map.set('id',101)
// map.set("name","ram")
// map.set("email","ram@gmail.com")      
// map.set("sal",10000)

// for (let i in map){
//     console.log(i);
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// FOR EACH:
// ex1. on array.
// let names = ["ram","sita","hind","pandu"]
// names.forEach((item,index,all_elements)=>{console.log(item,index,all_elements)})
//------------------------------------------------------------------------------------
// ex2.:on array of objects.
// const user = [
//     {id:1,name:"ram"},
//     {id:2,name:"aman"},
//     {id:3,name:"karan"}
// ]
// 1.
// function display(item) {
//     console.log(item.name)
// }
// user.forEach(display)        //=>we are not going to call the function.
//--------------------------------
// 2.
// user.forEach(item=>console.log(item.name))
//------------------------------------------------------------------------------------

// FILTER: filtering the data as per condition

// const books = [
//     {title: "book One", genre: "fiction", publish: 1981, edition: 2004},
//     {title: "book Two", genre: "Non-fiction", publish: 1992, edition: 2008},
//     {title: "book Three", genre: "History", publish: 1999, edition: 2007},
//     {title: "book Four", genre: "Non-fiction", publish: 1989, edition: 2010},
//     {title: "book Five", genre: "Science", publish: 2009, edition: 2014},
//     {title: "book Six", genre: "fiction", publish: 1987, edition: 2010},
//     {title: "book Seven", genre: "History", publish: 1986, edition: 1996},
//     {title: "book Eight", genre: "Science", publish: 2011, edition: 2016},
// ]
// const fil = books.filter((item)=>(item.genre === "History"))
// const fil = books.filter((item) => (item.publish>=1995 && item.genre==="History"))
// console.log(fil);

//------------------------------------------------------------------------------------

// MAP: modifies the data as per conditions.

// let myArr = [1,2,3,4,5,6,7]
// let newArr = myArr.map(item => {return item+10})
// console.log(newArr);

//------------------------------------------------------------------------------------

// CHAINING of filter,map,reduce.

// let myArr = [1,2,3,4,5,6,7]
// let newArr = myArr.map(item => {return item+10}).map(item => {return item*10}).filter(item => {return item>=140}).reduce((acc,item)=>{return acc+item},0)
// console.log(newArr);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//FILTER : 1.creates a new array containing the elements that pass a given condition.
//         2.does not change the original array.

// let arr = [100,200,300,10,200,400]
// console.log(arr.filter((item)=>{return item>=200}));
// console.log(arr);
//------------------------------------------------------------------------------------

// MAP : 1.changes each element of array into someting new.
//       2.It does not change the original array.

// let arr = [100,200,300,10,200,400]
// let tax_arr = arr.map((item)=>(item*10))
// console.log(arr);
// console.log(tax_arr);
//------------------------------------------------------------------------------------

// REDUCE:Reduce the array into single value.(sum, product, object, etc.)
// 1.
// let arr = [100,200,300,10,200,400]
// let total = arr.reduce((acc,curr)=> { return acc+curr},0)
// console.log(total);
//------------------------------------------------------------------------------------
// 2.
// let arr = [1,2,3,4]
// console.log(`${arr} = ${arr.reduce((acc, item)=>{return acc + item},0)}`);

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// FINAL PRACTICE:

// WRITING TABLE :

// let start = 1;
// let end = 5;

// console.log(`table from ${start} ot ${end} is :`);

// for (let i = start; i <= end; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j} = `,i * j);
//     }
// }

//--------------------------------------------
// console.log(`table of ${val} is :`);
// for (let i = 1; i <= 10; i++) {
// console.log(`${val} * ${i} =  ${i*val}\t`);
// }

//-------------------------------------------------------------------------------------

// let map = new Map()

// map.set("name" , "ram")
// map.set("id" , 101)
// map.set("sal" , 10000)
// console.log(map.get("name"));


// map.clear()
// console.log(map);
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
//--------------------------------------------

// let obj = {name : "ram", age:30, email : "ram@gmail.com"}

// for (const [key,val] of Object.entries(obj) ){
//     console.log(`${key} =>> ${val}`);
// }
//--------------------------------------------

