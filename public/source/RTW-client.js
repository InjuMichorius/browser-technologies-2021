//Teachers
const justus = document.getElementById('justus')
const wouter = document.getElementById('wouter')

//Javascript for teachers
function selectedTeacher() {
    const getSelectedValue = document.querySelector( 'input[name="teacher"]:checked')
    localStorage.setItem("teacher", getSelectedValue.value)
}

localStorage.getItem("teacher").checked = true

if(localStorage.getItem("teacher") === "justus"){
    justus.checked = true
} else if(localStorage.getItem("teacher") === "wouter") {
    wouter.checked = true
}