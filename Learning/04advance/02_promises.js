// promise => The promise object represents the eventual completion or failure of an asynchrnous operation states.
// CREATING PROMISES:
// 1.
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed"); 
// })
// -----------------------------------------------------------------

// 2.passing the data  form the network.

// new Promise(function (resolve, reject) {
//     resolve({ name: "ram", email: "ram@gmail.com" })
// })
// .then(function (user) {
//     console.log(user);
// })

// -----------------------------------------------------------------

// 3.handling errors.with reject and catch.

// const promiseThree = new Promise(function (resolve, reject) {
//     // setTimeout(() => {
//     error = true
//     if (error) {
//         reject("ERROR:something went wrong")
//     } else {
//         resolve({ name: "ram", salary: 10000 })
//     }
// })
// // })
// promiseThree
//     .then(function (data) {
//         console.log(data);
//         return data.name
//     }).then(function (name) {
//         console.log(name);
//     })
//     .catch((ghpla) => { console.log(ghpla) })
//     .finally(() => {
//         console.log("the data is resolved or got any error");
//     })

// -----------------------------------------------------------------

// 4.async await:

// const promiseFour = new Promise((resolve, reject) => {
//     error = false
//     setTimeout(() => {
//         if (error) {
//             reject("error occured");
//         } else {
//             resolve({ name: "sita", email: "sita@gmail.com" })
//         }
//     }, 1000)
// })

//     // 1.
// // async function consume() {
// //     const response = await promiseFour;
// //     console.log(response);
// // }
// // consume()
//     // 2.
// let data = (async () => {
//     try {
//         const response = await promiseFour;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// })
// data()

// ----------------------------------------------------------------------------------------------------------------------------------

// WE ARE FETCHING THE DATA of URL:
// 1.using async await

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/VaibhavTakawane")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

// -----------------------------------------------------------------
// 2. using then, catch
// fetch("https://api.github.com/users/VaibhavTakawane")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((ghapla)=>{console.log("E:",ghapla);
// })

// -----------------------------------------------------------------

// ex1
// "https://api.github.com/users/VaibhavTakawane"

// fetch("https://api.github.com/users/VaibhavTakawane")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         // console.log(data);
//         return data.id
//     })
//     .then((id) => {
//         console.log("id of user = ", id);
//     })
//     .catch((error)=>{console.log("error === ",error);
//     })

// -----------------------------------------------------------------
// ex2

// async function getData() {
//     try {
//         const response = await fetch("https://api.github.com/users/VaibhavTakawane");
//         const data = await response.json()
//         console.log(data.id);
//         console.log(data.followers);
//     } catch (error) {
//         console.log("oiuytrew ====== ", error);
//     }
// }
// getData()

// ----------------------------------------------------------------------------------------------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/VaibhavTakawane")
//         const data = await response.json()
//         console.log(data.blog);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// PRACTICE:
// -----------------------------------------------------------------
