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


    updateState();

    $form.on('submit', function(e) {
        e.preventDefault();
        
        const productName = $input.val().trim();
        
        if (productName === "") {
            alert("Please enter a product name!");
            return;
        }

        const $li = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center mb-2 p-2 border rounded');
        const $span = $('<span>').text(productName);
        const $delBtn = $('<button>').addClass('btn btn-danger btn-sm').text('Remove');

        $li.append($span).append($delBtn);
        $list.append($li);

        $input.val('');
        updateState();
    });

    $list.on('click', 'button', function() {
        $(this).closest('li').remove();
        updateState();
    });
});
