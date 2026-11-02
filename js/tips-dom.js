$(document).ready(function() {
    $('#searchInput').on('input', function() {
        const searchText = $(this).val().toLowerCase().trim();
        let visibleCount = 0;

        $('.filter-item').each(function() {
            const $item = $(this);
            const text = $item.text().toLowerCase();

            if (text.includes(searchText)) {
                $item.show();
                visibleCount++;
            } else {
                $item.hide();
            }
        });

     
        $('#matchCount').text(`Matching tips: ${visibleCount}`);

     
        if (visibleCount === 0) {
            $('#noResultsMessage').show();
        } else {
            $('#noResultsMessage').hide();
        }
    });
});
