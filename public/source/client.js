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

const startDate = document.getElementById('startDate')
const endDate = document.getElementById('endDate')

const lessonMaterial = document.getElementById('lessonMaterial')
const explanation = document.getElementById('explanation')
const ownInsight = document.getElementById('ownInsight')

console.log(startDate.value);

startDate.onselect = function() {
    localStorage.setItem("startDate", startDate.value)
}

endDate.onchange = function() {
    console.log('hello world');
}

lessonMaterial.onchange = function() {
    localStorage.setItem("lessonMaterial", lessonMaterial.value)
}
explanation.onchange = function() {
    localStorage.setItem("explanation", explanation.value)
}
ownInsight.onchange = function() {
    localStorage.setItem("ownInsight", ownInsight.value)
}

lessonMaterial.value = localStorage.getItem("lessonMaterial")
explanation.value = localStorage.getItem("explanation")
ownInsight.value = localStorage.getItem("ownInsight")