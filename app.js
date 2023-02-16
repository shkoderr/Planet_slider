//Получим наши кнопки и добавим слушатель событий к ним: 
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSLide('up')
})

downBtn.addEventListener('click', () => {
  changeSLide('down')
})

//Создадим функцию смены слайда, которая в параметр будет принимать направление движения слайдов
function changeSLide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight  //значение равно внутренней высоте элемента в пикселах
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}