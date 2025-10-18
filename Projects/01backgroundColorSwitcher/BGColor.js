// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }

//   });
// });


const buttons = document.querySelectorAll(".button")
const body = document.querySelector(".body")
const nav = document.querySelector("#nav")


buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        switch (event.target.id) {
            case "grey":
                body.style.background = event.target.id;
                nav.style.background = event.target.id;
                break;
            case "white":
                body.style.background = event.target.id;
                nav.style.background = event.target.id;
                break;
            case "blue":
                body.style.background = event.target.id;
                nav.style.background = event.target.id;
                break;
            case "yellow":
                body.style.background = event.target.id;
                nav.style.background = event.target.id;
                break;
            case "orange":
                body.style.background = event.target.id;
                nav.style.background = event.target.id;
                break;
            default:
                break;
        }
    }
    )
})