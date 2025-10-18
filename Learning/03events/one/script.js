// 1.
// let bmw = document.querySelector("#bmw");
// bmw.addEventListener("click", (e) => {
//     // alert("this is bmw")
//     console.log("this is inner");
//     // e.stopPropagation()
// }, true)

// let images = document.querySelector("#images");
// images.addEventListener("click", (e) => {
//     // alert("this is parent images")
//     console.log("this is outer");
//     e.stopPropagation()
// }, false)

// let google = document.querySelector("#abcde");
// google.addEventListener("click", (e) => {
//     console.log("this is google")
//     e.preventDefault()
//     e.stopPropagation()
// })

// -----------------------------------------------------------------------------------------------------
// 2.

// let img = document.querySelector("#images").addEventListener("click", (e) => {
//     console.log(e.target.tagName);
//     if (e.target.tagName === "IMG") {
//         let romove = e.target.parentNode
//         romove.remove()
//     }

// })
// -----------------------------------------------------------------------------------------------------

// let img = document.querySelector("#images").addEventListener("click", (e) => {
//     console.log(e.target.tagName);
//     console.log(e.target.id);
//     console.log(e.target);

// })
// -----------------------------------------------------------------------------------------------------
