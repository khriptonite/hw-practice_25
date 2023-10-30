let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0

const container = document.getElementById('count')

const count = document.createElement('p')
const addOne = document.createElement('button')
addOne.innerText = '+1'
const takeOne = document.createElement('button')
takeOne.innerText = '-1'
const reset = document.createElement('button')
reset.innerText = 'Reset'

count.innerText = currentCount

const incrementAddCount = () => {
    currentCount++
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)
}

const incrementTakeCount = () => {
    currentCount--
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)
}

const incrementResetCount = () => {
    currentCount = 0;
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)
}



addOne.addEventListener('click', incrementAddCount)
takeOne.addEventListener('click', incrementTakeCount)
reset.addEventListener('click', incrementResetCount)

container.appendChild(count)
container.appendChild(addOne)
container.appendChild(takeOne)
container.appendChild(reset)