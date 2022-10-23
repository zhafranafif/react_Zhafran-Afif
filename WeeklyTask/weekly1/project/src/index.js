const firstName = document.getElementById("exampleInputFirstName1")
const lastName = document.getElementById("exampleInputLastName1")
const email = document.getElementById("exampleInputEmail1")
const message = document.getElementById("exampleInputMessage1")
const form = document.getElementById("Form")

function inputSubmit(event) {
    const inputFirstName = firstName.value
    const inputLastName = lastName.value
    const inputEmail = email.value
    const inputMessage = message.value

    alert(`
    Name: ${inputFirstName} ${inputLastName},
    Email: ${inputEmail},
    Message: ${inputMessage},

    Hey ${inputFirstName}${inputLastName}!, Thanks for Submitting this form, we will
    inform you a further information!
    `)
    
    event.preventDefault()
}