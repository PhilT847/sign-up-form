/* script.js */

const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("password-confirm");

addInputListeners();

function addInputListeners() {

    passInput.addEventListener("input", (event) => {

        validatePassword();
    });

    confirmPassInput.addEventListener("input", (event) => {

        validatePassword();
    });
}

function validatePassword() {

    let pass = passInput.value;
    let confirm = confirmPassInput.value;

    if(pass != confirm) {

        confirmPassInput.setCustomValidity("Passwords do not match.");
    }
    else {

        confirmPassInput.setCustomValidity(""); // Validates
    }
}