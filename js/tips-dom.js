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

        // Обновляем счетчик совпадений
        $('#matchCount').text(`Matching tips: ${visibleCount}`);

        // Показываем или скрываем сообщение о том, что ничего не найдено
        if (visibleCount === 0) {
            $('#noResultsMessage').show();
        } else {
            $('#noResultsMessage').hide();
        }
    });
});
