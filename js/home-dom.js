$(function () {
    const $name = $("#welcome-name");
    const $message = $("#welcome-message");

    $("#welcome-button").on("click", function () {
        const name = $name.val().trim();
        $message.text(name === ""
            ? "Please enter your name first."
            : "Welcome to CookFromHome, " + name + "!");
    });

    $name.on("input", function () {
        $message.text("Enter your name and press the button.");
    });

    $(".home-form").on("submit", function (event) {
        event.preventDefault();
        const ingredients = $("#ingredients-input").val().trim();
        if (!ingredients) return;
        window.location.href = "recipes.html?ingredients=" + encodeURIComponent(ingredients);
    });
});
