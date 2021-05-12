//Teachers
const joost = document.getElementById('joost')
const wouter = document.getElementById('wouter')
const suus = document.getElementById('suus')
const robin = document.getElementById('robin')

//Javascript for teachers
function selectedTeacher() {
    const getSelectedValue = document.querySelector( 'input[name="teacher"]:checked')
    localStorage.setItem("teacher", getSelectedValue.value)
}

localStorage.getItem("teacher").checked = true

if(localStorage.getItem("teacher") === "joost"){
    joost.checked = true
} else if(localStorage.getItem("teacher") === "wouter") {
    wouter.checked = true
} else if(localStorage.getItem("teacher") === "suus") {
    suus.checked = true
} else if(localStorage.getItem("teacher") === "robin") {
    robin.checked = true
}