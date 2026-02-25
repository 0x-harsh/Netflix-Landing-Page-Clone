const slider = document.getElementById('m-2-cards-cont-1')
const leftButton = document.querySelector('.left-btn')
const rightButton = document.querySelector('.right-btn')

// const scrollAmount = 965;
const scrollAmount = 176

function manageButtons() {
    if (slider.scrollLeft === 0) {
        leftButton.classList.add('invisible')
        rightButton.classList.remove('invisible')
    } else if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        rightButton.classList.add('invisible')
        leftButton.classList.remove('invisible')
    }
}

window.addEventListener('load', () => {
    manageButtons()
})

leftButton.addEventListener('click', () => {
    manageButtons()
    slider.scrollLeft -= scrollAmount
})

rightButton.addEventListener('click', () => {
    manageButtons()
    slider.scrollLeft += scrollAmount
})

slider.scrollLeft.addEventListener('change', () => {
    manageButtons()
})