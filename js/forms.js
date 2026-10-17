
// Password validation

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

function checkPasswords() {
    if (confirmPassword.value !== "" &&
        password.value !== confirmPassword.value) {

        confirmPassword.setCustomValidity("Passwords do not match");
        passwordError.textContent = "Passwords do not match.";

    } else {
        confirmPassword.setCustomValidity("");
        passwordError.textContent =
            "Password must match and contain 8+ characters.";
    }
}

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);


// Forms validation

const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function(form) {

    const successMessage = form.querySelector(".form-success");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.id === "registerForm") {
            checkPasswords();
        }

        form.classList.add("was-validated");

        if (form.checkValidity()) {
            successMessage.hidden = false;
        } else {
            successMessage.hidden = true;
        }
    });

    // Hide success message when editing
    form.addEventListener("input", function() {
        successMessage.hidden = true;
    });

    form.addEventListener("change", function() {
        successMessage.hidden = true;
    });

    // Reset fields and validation
    form.addEventListener("reset", function() {
        form.classList.remove("was-validated");
        successMessage.hidden = true;

        if (form.id === "registerForm") {
            confirmPassword.setCustomValidity("");
            passwordError.textContent =
                "Password must match and contain 8+ characters.";
        }
    });
});
