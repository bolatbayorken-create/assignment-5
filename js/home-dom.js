

const welcomeInput = document.getElementById("welcome-name");
const welcomeMessage = document.querySelector("#welcome-message");
const welcomeButton = document.getElementById("welcome-button");

welcomeButton.addEventListener("click", function() {
    const name = welcomeInput.value.trim();

    if (name === "") {
        welcomeMessage.textContent = "Please enter your name first.";
    } else {
        welcomeMessage.textContent =
            "Welcome to CookFromHome, " + name + "!";
    }
});



const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    const darkTheme = document.body.classList.toggle("theme-dark");

    if (darkTheme) {
        themeButton.textContent = "Switch to light theme";
    } else {
        themeButton.textContent = "Switch to dark theme";
    }

    themeButton.setAttribute("aria-pressed", String(darkTheme));
});
