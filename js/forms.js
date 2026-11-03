$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        let name = $('#nameInput').val().trim();
        let email = $('#emailInput').val().trim();
        let message = $('#messageInput').val().trim();
        
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (name === "") {
            $('#nameInput').addClass('is-invalid');
            $('#nameError').show();
            isValid = false;
        } else {
            $('#nameInput').removeClass('is-invalid').addClass('is-valid');
            $('#nameError').hide();
        }
        
        if (email === "" || !emailRegex.test(email)) {
            $('#emailInput').addClass('is-invalid');
            $('#emailError').show();
            isValid = false;
        } else {
            $('#emailInput').removeClass('is-invalid').addClass('is-valid');
            $('#emailError').hide();
        }
        
        if (message.length < 10 || message.length > 500) {
            $('#messageInput').addClass('is-invalid');
            $('#messageError').show();
            isValid = false;
        } else {
            $('#messageInput').removeClass('is-invalid').addClass('is-valid');
            $('#messageError').hide();
        }
        
        if (isValid) {
            $('#formSuccess')
                .text('Demonstration: Form validated successfully! (Frontend simulation)')
                .fadeIn();
            
            setTimeout(function() {
                $('#contactForm')[0].reset();
                $('.form-control').removeClass('is-valid is-invalid');
                $('#formSuccess').fadeOut();
            }, 3000);
        } else {
            $('#formSuccess').hide();
        }
    });
});
