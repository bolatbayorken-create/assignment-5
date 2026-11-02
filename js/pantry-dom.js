$(document).ready(function() {
    const $form = $('#pantry-add-form');
    const $input = $('#pantry-new-product');
    const $list = $('#pantry-product-list');
    const $counter = $('#pantry-item-count');
    const $emptyMsg = $('#pantry-empty-list');

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
        const $delBtn = $('<button>').text('Remove');

        $li.append($span).append($delBtn);
        $list.append($li);
        updateState();
    }

    $form.on('submit', function(e) {
        e.preventDefault();
        const value = $input.val();
        
        if (value.trim() === "") {
            alert("Please enter a product name!");
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
    });

    updateState();
});