let randomColor = () => {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalId;

document.querySelector("#start").addEventListener("click", () => {
    start()
})

document.querySelector("#stop").addEventListener("click", () => {
    stop()
})

start = function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
}
stop = function () {
    clearInterval(intervalId);
    intervalId = null;
}


