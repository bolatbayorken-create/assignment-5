$(document).ready(function() {
    const $form = $('#pantry-add-form');
    const $input = $('#pantry-new-product');
    const $list = $('#pantry-product-list');
    const $counter = $('#pantry-item-count');
    const $emptyMsg = $('#pantry-empty-list');
    const $feedback = $('#pantry-add-feedback').attr({ role: 'status', 'aria-live': 'polite' });

    function showFeedback(message) {
        $feedback.find('span').text(message);
        $feedback.stop(true, true).fadeIn(150).delay(1500).fadeOut(250);
    }

    function updateState() {
        const count = $list.children('li').length;
        $counter.text(count);
        
        if (count === 0) {
            $emptyMsg.show();
        } else {
            $emptyMsg.hide();
        }
    }

    function addProduct(name) {
        const productName = name.trim();
        if (productName === "") return;

        const $li = $('<li>');
        const $span = $('<span>').text(productName);
        const $delBtn = $('<button>', { type: 'button', text: 'Remove' });

        $li.append($span).append($delBtn);
        $list.append($li);
        updateState();
        showFeedback('Added ' + productName + '.');
    }

    $form.on('submit', function(e) {
        e.preventDefault();
        const value = $input.val();
        
        if (value.trim() === "") {
            showFeedback('Please enter a product name!');
            return;
        }

        addProduct(value);
        $input.val('');
    });

    $('.pantry-shelf .foods p').on('click', function() {
        const categoryProduct = $(this).text();
        addProduct(categoryProduct);
    });

    $list.on('click', 'button', function() {
        $(this).closest('li').remove();
        updateState();
        showFeedback('Ingredient removed.');
    });

    // Accessible, animated FAQ. stop(true, true) prevents animation queues.
    $(".faq-question").each(function (index) {
        const $button = $(this);
        const $answer = $button.next(".faq-answer");
        const id = "pantry-answer-" + (index + 1);
        $answer.attr("id", id).prop("hidden", false).hide();
        $button.attr({ "aria-controls": id, "aria-expanded": "false" });
    });

    $(".faq-question").on("click", function () {
        const $button = $(this);
        const open = $button.attr("aria-expanded") !== "true";
        $button.next(".faq-answer").stop(true, true).slideToggle(200);
        $button.attr("aria-expanded", String(open));
    });

    // The shelf entries are clickable in the original HTML; allow keyboard use as well.
    $(".pantry-shelf .foods p")
        .attr({ role: "button", tabindex: "0" })
        .on("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                $(this).trigger("click");
            }
        });

    $(".cook-now-btn").on("click", function (event) {
        const products = $list.children("li").find("span").map(function () {
            return $(this).text().trim();
        }).get();
        if (!products.length) return;
        event.preventDefault();
        window.location.href = "recipes.html?ingredients=" + encodeURIComponent(products.join(", "));
    });

    updateState();
});
