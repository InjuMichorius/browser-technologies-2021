// const images = [
//     '../img/background-image.jpg',
//     '../img/background-image3.jpg',
//     '../img/background-image4.jpg',
//     '../img/background-image5.jpg'
// ]

// const img = document.querySelector('html')

// function imgDisp() {
//     const num = Math.floor(Math.random() * 6)
//     img.style.backgroundImage = 'url("' + images[num] + '")'
// }

// imgDisp()

const lessonMaterial = document.getElementById('lessonMaterial')
const explanation = document.getElementById('explanation')
const ownInsight = document.getElementById('ownInsight')

lessonMaterial.onkeyup = function() {
    localStorage.setItem("lessonMaterial", lessonMaterial.value)
}
explanation.onkeyup = function() {
    localStorage.setItem("explanation", explanation.value)
}
ownInsight.onkeyup = function() {
    localStorage.setItem("ownInsight", ownInsight.value)
}

lessonMaterial.value = localStorage.getItem("lessonMaterial")
explanation.value = localStorage.getItem("explanation")
ownInsight.value = localStorage.getItem("ownInsight")