$(function () {
    const $button = $("#theme-button");
    let saved = false;
    try { saved = localStorage.getItem("cfh-theme") === "dark"; } catch (error) {}

    function setTheme(dark) {
        $("body").toggleClass("theme-dark", dark);
        $button.text(dark ? "Light theme" : "Dark theme")
            .attr("aria-pressed", String(dark))
            .attr("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }

    setTheme(saved);

    $button.on("click", function () {
        const dark = !$("body").hasClass("theme-dark");
        setTheme(dark);
        try { localStorage.setItem("cfh-theme", dark ? "dark" : "light"); } catch (error) {}
    });
});
