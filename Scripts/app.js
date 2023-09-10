let form = document.getElementById("form")
let email = document.getElementById("mail")

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = email.value.trim();
    //Javascript reGex for Email Validation.
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (emailValue === "") {
        error(email, "Email Cannot be empty")
    } else if (!emailValue.match(regEmail)) {
        error(email, "please provide a valid email address")
    }
    else {
        success(email, "Done")
    }
})

function error(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Error";
    req.className = "error"
    span.className = "error-text";
    req.value = "email@examole/com";
}

function success(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Done";
    req.className = "success"
    span.className = "success-text";
}
