const accountForm = document.getElementById('student')
const studentName = document.getElementById('studentName')
const hint = document.querySelector('hint')

hint.getElementsByClassName.display = "none"

accountForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let messages = []
    if (studentName.value === '' || studentName.value == null) {
        messages.push('Please enter a student name')
    }

    if (messages.length > 0) {
        e.preventDefault()
        hint.getElementsByClassName.color = "red"
        hint.innerText = messages.join(', ')
    }
})


console.log('hello world');