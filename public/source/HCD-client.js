//Teachers
const koop = document.getElementById('koop')
const vasilis = document.getElementById('vasilis')

//Javascript for teachers
function selectedTeacher() {
    const getSelectedValue = document.querySelector( 'input[name="teacher"]:checked')
    localStorage.setItem("teacher", getSelectedValue.value)
}

localStorage.getItem("teacher").checked = true

if(localStorage.getItem("teacher") === "koop"){
    koop.checked = true
} else if(localStorage.getItem("teacher") === "vasilis") {
    vasilis.checked = true
}