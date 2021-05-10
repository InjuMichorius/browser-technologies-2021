const accountForm = document.getElementById('student')
const studentName = document.getElementById('studentName')
const studentNumber = document.getElementById('studentNumber')
const hint = document.getElementById('hint')

if(Window.localStorage) {
    //localStorage code
}

console.log(hint)

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


console.log('hello world');