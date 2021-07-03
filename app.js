let timer = 10
let pause = true


const count = () => {
    display.innerHTML = timer
    if (timer <= 0 || pause === true) {
        clearInterval(time)
    }
    timer --
    if (pause) {
        clearInterval(time)
    }
}
const start = () => {
    if (pause) {
        pause = false
        let time = setInterval(() => {
            display.innerHTML = timer
            if (timer <= 0 || pause === true) {
                clearInterval(time)
            }
            timer --
        }, 1000)
    } else {
        pause = true
    }
}



const display = document.getElementById('timer')
document.getElementById('startButton').addEventListener('click', start)
