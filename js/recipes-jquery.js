// Assignment 6 — Task 3: combined live search and category filtering.
// This script belongs to the existing Recipes page, not a separate demo.
$(function () {
    const $search = $("#recipes-search");
    const $categories = $('input[name="meal-filter"]');
    const $cards = $(".recipes-grid .recipes-card");
    const $resultCount = $("#recipes-results-count");
    const $noResults = $("#recipes-no-results");

    const incoming = new URLSearchParams(window.location.search).get("ingredients");
    if (incoming) $search.val(incoming);

    function filterRecipes() {
        // .val() reads the current search and category inputs.
        const query = $.trim($search.val()).toLowerCase();
        const terms = query.split(/[,;]+/).map(function (part) {
            return part.trim();
        }).filter(Boolean);
        const category = $categories.filter(":checked").val() || "all";
        let matches = 0;

        $cards.each(function () {
            const $card = $(this);
            const title = $card.find("h3").text().toLowerCase();
            const description = $card.find(".recipes-card-body > p").text().toLowerCase();
            const ingredients = $card.find(".recipes-details-body ul").text().toLowerCase();
            const cardCategory = $card.attr("data-category");

            const content = title + " " + description + " " + ingredients;
            const matchesText = terms.length === 0 || terms.some(function (term) {
                return content.includes(term);
            });
            const matchesCategory = category === "all" || cardCategory === category;
            const visible = matchesText && matchesCategory;

            // .toggle() changes which recipe cards are visible.
            $card.toggle(visible);
            if (visible) matches++;
        });

        // .text() updates the visible match counter safely.
        $resultCount.text("Showing " + matches + " of " + $cards.length + " recipes");
        $noResults.prop("hidden", matches !== 0);
    }

    // .on() connects two different event types to the filtering function.
    $search.on("input", filterRecipes);
    $categories.on("change", filterRecipes);

    $("#recipes-clear-filters").on("click", function () {
        $search.val("");
        $("#recipes-all").prop("checked", true);
        filterRecipes();
        $search.trigger("focus");
    });

    filterRecipes();
});
