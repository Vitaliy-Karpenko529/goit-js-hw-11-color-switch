const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('data-action', "start"),
    stopButton: document.querySelector('data-action', "stop"),
    bodyRefs: document.querySelector('body')
}

refs.startButton.addEventListener('click', startChangeColor)
refs.stopButton.addEventListener('click', stopChangeColor)

let isActive = false
let intervalId = null

function changeColorBody() {
    refs.bodyRefs.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function startChangeColor() {
    if (isActive) {
        return
    }
    isActive = true
    intervalId = setInterval(changeColorBody, 1000)
}

function stopChangeColor() {
    clearInterval(intervalId)
    isActive = false
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};