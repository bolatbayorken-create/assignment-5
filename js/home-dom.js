$(document).ready(function() {
    $("#welcome-button").on("click", function() {
        const name = $.trim($("#welcome-name").val());

        if (name === "") {
            $("#welcome-message").text("Please enter your name first.");
        } else {
            $("#welcome-message").text("Welcome to CookFromHome, " + name + "!");
        }
    });

    $("#theme-button").on("click", function() {
        const darkTheme = $("body").toggleClass("theme-dark").hasClass("theme-dark");

        if (darkTheme) {
            $(this).text("Switch to light theme");
        } else {
            $(this).text("Switch to dark theme");
        }

        $(this).attr("aria-pressed", String(darkTheme));
    });
});
