
const form = document.querySelector("form")
const submitBTN = document.getElementById("submit-btn")

// validating data after the user clicks the Submit button
submitBTN.addEventListener('click', (e) => {
    e.preventDefault()

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword()


    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        console.log("Form data is validated")
    }
    else {
        console.log("Form data is incorrect")
    }
})


// Realtime data validation --> OPTIONAL
form.addEventListener("input", (e) => {

    switch (e.target.id) {
        case "username":
            checkUsername()
            break;

        case "email":
            checkEmail()
            break;

        case "password":
            checkPassword()
            break;

        case "confirm-password":
            checkConfirmPassword()
            break;

    }
})







// ------------- Functions ---------------

function isRequired(value) {
    value = value === "" ? false : true
    return value
}

function isBetween(value, minLength, maxLength) {
    value = (value.length < minLength || value.length > maxLength) ? false : true
    return value
}

function isEmailValid(value) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};


function isPasswordSecure(value) {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return regex.test(value);
};


function checkUsername() {
    const usernameInput = document.getElementById("username")
    const username = usernameInput.value.trim()

    // console.log("in check username")
    let isValid = false
    const min = 3, max = 25

    if (!isRequired(username)) {
        showError(usernameInput, "Username is required")
    }
    else if (!isBetween(username, min, max)) {
        showError(usernameInput, `Username should be within ${min} and ${max}`)
    }
    else {
        showSuccess(usernameInput)
        isValid = true
    }

    return isValid
}



function checkEmail() {
    const emailInput = document.getElementById("email")
    const email = emailInput.value.trim()

    // console.log("in check email")

    let isValid = false

    if (!isRequired(email)) {
        showError(emailInput, "Email is required")
    }
    else if (!isEmailValid(email)) {
        showError(emailInput, "Email is not valid")
    }
    else {
        showSuccess(emailInput)
        isValid = true
    }

    return isValid
}


function checkPassword() {
    const passwordInput = document.getElementById("password")
    const password = passwordInput.value.trim()

    // console.log("in check password")

    let isValid = false

    if (!isRequired(password)) {
        showError(passwordInput, "Password is required")
    }
    else if (!isPasswordSecure(password)) {
        showError(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')
    }
    else {
        showSuccess(passwordInput)
        isValid = true
    }

    return isValid
}

function checkConfirmPassword() {
    const confirmPasswordInput = document.getElementById("confirm-password")
    const confirmPassword = confirmPasswordInput.value.trim()

    const passwordInput = document.getElementById("password")
    const password = passwordInput.value.trim()

    // console.log("in check confirm password")

    let isValid = false

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordInput, "Please type your password to confirm")
    }
    else if (confirmPassword !== password) {
        showError(confirmPasswordInput, "Passwords didn't match")
    }
    else {
        showSuccess(confirmPasswordInput)
        isValid = true
    }

    return isValid
}



function showError(inputElement, errorMessage) {

    // console.log(inputElement)

    const parentElement = inputElement.parentElement
    const smallElement = parentElement.querySelector("small")

    inputElement.classList.remove("success")
    inputElement.classList.add("error")

    smallElement.innerText = errorMessage

}



function showSuccess(inputElement) {

    const parentElement = inputElement.parentElement
    const smallElement = parentElement.querySelector("small")

    inputElement.classList.remove("error")
    inputElement.classList.add("success")

    smallElement.innerText = ""

}