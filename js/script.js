$(document).ready(function () {

    $('#name-input').on('input', function () {
        let enteredName = $(this).val().trim();

        if (enteredName === '') {
            $('#welcome-message').text('\u041f\u0440\u0438\u0432\u0435\u0442, \u0413\u043e\u0441\u0442\u044c!');
        } else {
            $('#welcome-message').text('\u041f\u0440\u0438\u0432\u0435\u0442, ' + enteredName + '!');
        }
    });

    $('#theme-toggle-btn').on('click', function () {
        $('body').toggleClass('dark-theme');

        if ($('body').hasClass('dark-theme')) {
            $(this).text('\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430')
                .removeClass('btn-outline-secondary')
                .addClass('btn-outline-light');
        } else {
            $(this).text('\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430')
                .removeClass('btn-outline-light')
                .addClass('btn-outline-secondary');
        }
    });

});