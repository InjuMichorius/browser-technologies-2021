//Teachers
const koop = document.getElementById('koop')
const ppk = document.getElementById('ppk')

//Javascript for teachers
function selectedTeacher() {
    const getSelectedValue = document.querySelector( 'input[name="teacher"]:checked')
    localStorage.setItem("teacher", getSelectedValue.value)
}

localStorage.getItem("teacher").checked = true

if(localStorage.getItem("teacher") === "koop"){
    koop.checked = true
} else if(localStorage.getItem("teacher") === "ppk") {
    ppk.checked = true
}