const studentName = document.getElementById('studentName')
const studentNumber = document.getElementById('studentNumber')
const studentNameHint = document.querySelector('.studentName-hint')
const studentNumberHint = document.querySelector('.studentNumber-hint')

studentNameHint.innerText = ''
studentNumberHint.innerText = ''

studentName.onchange = function() {
    localStorage.setItem("studentName", studentName.value)
}

studentName.value = localStorage.getItem('studentName')

studentName.addEventListener('blur', (e) => {
    let messages = []
    e.preventDefault()
    if (!/[A-zÀ-ž\- ]+/.test(studentName.value)) {
        messages.push('Studentname can only contain characters')
    } else {
        hint.innerText = ''
    }

    if (messages.length > 0) {
        hint.innerText = messages.join(', ')
    }
})

studentNumber.addEventListener('blur', (e) => {
    let messages = []
    e.preventDefault()
    if (!/[0-9]{9}/.test(studentNumber.value)) {
        let numberLength = studentNumber.value.length
        messages.push(`Studentnumber must be 9 numbers long (${numberLength}/9)`)
    } else {
        hint.innerText = ''
    }

    if (messages.length > 0) {
        hint.innerText = messages.join(', ')
    }
})