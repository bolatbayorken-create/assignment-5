const tipsSearch = document.getElementById("tips-search");
const tipCards = document.querySelectorAll(".tip-card");
const tipsResultCount = document.getElementById("tips-result-count");
const tipsNoResults = document.getElementById("tips-no-results");

function filterTips() {
    const searchText = tipsSearch.value.trim().toLowerCase();
    let matches = 0;

    tipCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const matchesSearch = title.includes(searchText);
        card.hidden = !matchesSearch;
        if (matchesSearch) matches++;
    });

    tipsResultCount.textContent = "Matching tips: " + matches;
    tipsNoResults.hidden = matches !== 0;
}

tipsSearch.addEventListener("input", filterTips);
filterTips();
