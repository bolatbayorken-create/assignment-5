$(document).ready(function() {
    $('#tipSearch').on('keyup input', function() {
        let query = $(this).val().toLowerCase().trim();
        let visibleCount = 0;

        $('.tip-item').each(function() {
            let keywords = $(this).attr('data-keywords').toLowerCase();
            let text = $(this).text().toLowerCase();

            if (keywords.includes(query) || text.includes(query)) {
                $(this).fadeIn(200);
                visibleCount++;
            } else {
                $(this).fadeOut(200);
            }
        });

        $('#tipCount').text(visibleCount);

        if (visibleCount === 0) {
            $('#noResults').fadeIn(200);
        } else {
            $('#noResults').fadeOut(200);
        }
    });
});
