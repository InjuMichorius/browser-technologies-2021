//Period
const startDate = document.getElementById('startDate')
const endDate = document.getElementById('endDate')

//Lesson material score
const lessonMaterial1 = document.getElementById('lessonMaterial-1')
const lessonMaterial2 = document.getElementById('lessonMaterial-2')
const lessonMaterial3 = document.getElementById('lessonMaterial-3')
const lessonMaterial4 = document.getElementById('lessonMaterial-4')
const lessonMaterial5 = document.getElementById('lessonMaterial-5')
const lessonMaterial6 = document.getElementById('lessonMaterial-6')
const lessonMaterial7 = document.getElementById('lessonMaterial-7')
const lessonMaterial8 = document.getElementById('lessonMaterial-8')
const lessonMaterial9 = document.getElementById('lessonMaterial-9')
const lessonMaterial10 = document.getElementById('lessonMaterial-10')

//Explanation score
const explanation1 = document.getElementById('explanation-1')
const explanation2 = document.getElementById('explanation-2')
const explanation3 = document.getElementById('explanation-3')
const explanation4 = document.getElementById('explanation-4')
const explanation5 = document.getElementById('explanation-5')
const explanation6 = document.getElementById('explanation-6')
const explanation7 = document.getElementById('explanation-7')
const explanation8 = document.getElementById('explanation-8')
const explanation9 = document.getElementById('explanation-9')
const explanation10 = document.getElementById('explanation-10')

//Own insight score
const ownInsight1 = document.getElementById('ownInsight-1')
const ownInsight2 = document.getElementById('ownInsight-2')
const ownInsight3 = document.getElementById('ownInsight-3')
const ownInsight4 = document.getElementById('ownInsight-4')
const ownInsight5 = document.getElementById('ownInsight-5')
const ownInsight6 = document.getElementById('ownInsight-6')
const ownInsight7 = document.getElementById('ownInsight-7')
const ownInsight8 = document.getElementById('ownInsight-8')
const ownInsight9 = document.getElementById('ownInsight-9')
const ownInsight10 = document.getElementById('ownInsight-10')

//Javascript for period
startDate.onchange = function () {
    localStorage.setItem("startDate", startDate.value)
}

endDate.onchange = function () {
    localStorage.setItem("endDate", endDate.value)
}

startDate.value = localStorage.getItem('startDate')
endDate.value = localStorage.getItem('endDate')

//Javascript for scores

//Lesson material score
function selectedLessonMaterial() {
    const getSelectedValue = document.querySelector( 'input[name="lessonMaterial"]:checked')
    localStorage.setItem("lessonMaterial", getSelectedValue.value)
}

let checkedLessonMaterial = "lessonMaterial" + localStorage.getItem("lessonMaterial")

checkedLessonMaterial.checked = true

if(localStorage.getItem("lessonMaterial") === "1"){
    lessonMaterial1.checked = true
} else if(localStorage.getItem("lessonMaterial") === "2") {
    lessonMaterial2.checked = true
} else if(localStorage.getItem("lessonMaterial") === "3") {
    lessonMaterial3.checked = true
} else if(localStorage.getItem("lessonMaterial") === "4") {
    lessonMaterial4.checked = true
} else if(localStorage.getItem("lessonMaterial") === "5") {
    lessonMaterial5.checked = true
} else if(localStorage.getItem("lessonMaterial") === "6") {
    lessonMaterial6.checked = true
} else if(localStorage.getItem("lessonMaterial") === "7") {
    lessonMaterial7.checked = true
} else if(localStorage.getItem("lessonMaterial") === "8") {
    lessonMaterial8.checked = true
} else if(localStorage.getItem("lessonMaterial") === "9") {
    lessonMaterial9.checked = true
} else if(localStorage.getItem("lessonMaterial") === "10") {
    lessonMaterial10.checked = true
}

//Explanation score
function selectedExplanation() {
    const getSelectedValue = document.querySelector( 'input[name="explanation"]:checked')
    localStorage.setItem("explanation", getSelectedValue.value)
}

let checkedExplanation = "explanation" + localStorage.getItem("explanation")

checkedExplanation.checked = true

if(localStorage.getItem("explanation") === "1"){
    explanation1.checked = true
} else if(localStorage.getItem("explanation") === "2") {
    explanation2.checked = true
} else if(localStorage.getItem("explanation") === "3") {
    explanation3.checked = true
} else if(localStorage.getItem("explanation") === "4") {
    explanation4.checked = true
} else if(localStorage.getItem("explanation") === "5") {
    explanation5.checked = true
} else if(localStorage.getItem("explanation") === "6") {
    explanation6.checked = true
} else if(localStorage.getItem("explanation") === "7") {
    explanation7.checked = true
} else if(localStorage.getItem("explanation") === "8") {
    explanation8.checked = true
} else if(localStorage.getItem("explanation") === "9") {
    explanation9.checked = true
} else if(localStorage.getItem("explanation") === "10") {
    explanation10.checked = true
}

//Own insight score
function selectedOwnInsight() {
    const getSelectedValue = document.querySelector( 'input[name="ownInsight"]:checked')
    localStorage.setItem("ownInsight", getSelectedValue.value)
}

let checkedOwnInsight = "ownInsight" + localStorage.getItem("ownInsight")

checkedOwnInsight.checked = true

if(localStorage.getItem("ownInsight") === "1"){
    ownInsight1.checked = true
} else if(localStorage.getItem("ownInsight") === "2") {
    ownInsight2.checked = true
} else if(localStorage.getItem("ownInsight") === "3") {
    ownInsight3.checked = true
} else if(localStorage.getItem("ownInsight") === "4") {
    ownInsight4.checked = true
} else if(localStorage.getItem("ownInsight") === "5") {
    ownInsight5.checked = true
} else if(localStorage.getItem("ownInsight") === "6") {
    ownInsight6.checked = true
} else if(localStorage.getItem("ownInsight") === "7") {
    ownInsight7.checked = true
} else if(localStorage.getItem("ownInsight") === "8") {
    ownInsight8.checked = true
} else if(localStorage.getItem("ownInsight") === "9") {
    ownInsight9.checked = true
} else if(localStorage.getItem("ownInsight") === "10") {
    ownInsight10.checked = true
}