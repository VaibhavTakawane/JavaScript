const form = document.querySelector("form")
// {this usecase is wrong it gives you a empty value
// const height = parseInt(document.querySelector(".height").value)
// const weight = parseInt(document.querySelector(".weight").value)
// }

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector(".height").value)
    const weight = parseInt(document.querySelector(".weight").value)
    const result = document.querySelector("#result")
    let bmi = (weight / ((height * height) / 10000)).toFixed(2)

    if (height === "" || isNaN(height) || height < 0) {

        result.innerHTML = "<span> <h2> Please enter valid height  </h2> </span>"
    }
    if (weight === "" || isNaN(weight) || weight < 0) {

        result.innerHTML = "<span> <h2> Please enter valid weight</h2> </span>"
    }
    else {
        if (bmi <= 18.6) {
            const msg = "You are Underweight"
            result.innerHTML = `<div><span>${bmi}</span> <br> <span>${msg}</span> </div>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            const msg = "You are in Normal range"
            result.innerHTML = `<div><span>${bmi}</span> <br> <span>${msg}</span> </div>`
        }
        else if (bmi >= 24.9) {
            const msg = "You are Overweight"
            result.innerHTML = `<div><span>${bmi}</span> <br> <span>${msg}</span> </div>`
        }
    }
})
