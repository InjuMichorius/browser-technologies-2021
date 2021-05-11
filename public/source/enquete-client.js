const joost = document.getElementById('joost')
const wouter = document.getElementById('wouter')
const suus = document.getElementById('suus')
const robin = document.getElementById('robin')
const startDate = document.getElementById('startDate')
const endDate = document.getElementById('endDate')

function selected() {
    const getSelectedValue = document.querySelector( 'input[name="teacher"]:checked')
    if (getSelectedValue.value === "joost") {
        localStorage.setItem("teacher", getSelectedValue.value)
    } else if (getSelectedValue.value === "wouter") {
        localStorage.setItem("teacher", getSelectedValue.value)
    } else if (getSelectedValue.value === "suus") {
        localStorage.setItem("teacher", getSelectedValue.value)
    } else if (getSelectedValue.value === "robin") {
        localStorage.setItem("teacher", getSelectedValue.value)
    }
}

if(localStorage.getItem("teacher") === "joost"){
    joost.checked = true
} else if(localStorage.getItem("teacher") === "wouter") {
    wouter.checked = true
} else if(localStorage.getItem("teacher") === "suus") {
    suus.checked = true
} else if(localStorage.getItem("teacher") === "robin") {
    robin.checked = true
}

startDate.onchange = function () {
    localStorage.setItem("startDate", startDate.value)
}

endDate.onchange = function () {
    localStorage.setItem("endDate", endDate.value)
}

startDate.value = localStorage.getItem('startDate')
endDate.value = localStorage.getItem('endDate')