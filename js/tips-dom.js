const tipsSearch = document.getElementById("tips-search");
const tipCards = document.querySelectorAll(".tip-card");
const tipsResultCount = document.getElementById("tips-result-count");
const tipsNoResults = document.getElementById("tips-no-results");

function filterTips() {
    if (!tipsSearch) return;
    const searchText = tipsSearch.value.trim().toLowerCase();
    let matches = 0;

    tipCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const matchesSearch = title.includes(searchText);
        card.hidden = !matchesSearch;
        if (matchesSearch) matches++;
    });

    if (tipsResultCount) tipsResultCount.textContent = "Matching tips: " + matches;
    if (tipsNoResults) tipsNoResults.hidden = matches !== 0;
}

if (tipsSearch) {
    tipsSearch.addEventListener("input", filterTips);
    filterTips();
}


$(document).ready(function() {
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    $('#tipsContactForm').on('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        const name = $('#tipUserName').val().trim();
        const email = $('#tipUserEmail').val().trim();
        const message = $('#tipUserMessage').val().trim();

        $('.form-control').css('border-color', '#b4af96');
        $('.invalid-feedback').hide();
        $('#tipsFormSuccess').attr('hidden', true);

        if (name.length < 2) {
            $('#tipUserName').css('border-color', '#c43a3a');
            $('#tipUserName').siblings('.invalid-feedback').text('Name must contain at least 2 characters.').show();
            isValid = false;
        }

        if (email === '' || !isValidEmail(email)) {
            $('#tipUserEmail').css('border-color', '#c43a3a');
            $('#tipUserEmail').siblings('.invalid-feedback').text('Please enter a valid email address (e.g., user@mail.com).').show();
            isValid = false;
        }

        if (message.length < 5) {
            $('#tipUserMessage').css('border-color', '#c43a3a');
            $('#tipUserMessage').siblings('.invalid-feedback').text('Message must be at least 5 characters long.').show();
            isValid = false;
        }

        if (isValid) {
            $('#tipsFormSuccess').attr('hidden', false);
            this.reset();
        }
    });

    $('#tipsContactForm input, #tipsContactForm textarea').on('input', function() {
        $(this).css('border-color', '#b4af96');
        $(this).siblings('.invalid-feedback').hide();
        $('#tipsFormSuccess').attr('hidden', true);
    });
});
