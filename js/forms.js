$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        

        let name = $('#nameInput').val().trim();
        let email = $('#emailInput').val().trim();
        let message = $('#messageInput').val().trim();
        

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
     
        if (name === "") {
            $('#nameInput').addClass('is-invalid border-danger');
            $('#nameError').show();
            isValid = false;
        } else {
            $('#nameInput').removeClass('is-invalid border-danger').addClass('is-valid border-success');
            $('#nameError').hide();
        }
        

        if (email === "" || !emailRegex.test(email)) {
            $('#emailInput').addClass('is-invalid border-danger');
            $('#emailError').show();
            isValid = false;
        } else {
            $('#emailInput').removeClass('is-invalid border-danger').addClass('is-valid border-success');
            $('#emailError').hide();
        }
        

        if (message.length < 10 || message.length > 500) {
            $('#messageInput').addClass('is-invalid border-danger');
            $('#messageError').show();
            isValid = false;
        } else {
            $('#messageInput').removeClass('is-invalid border-danger').addClass('is-valid border-success');
            $('#messageError').hide();
        }
        
  
        if (isValid) {
            $('#formSuccess')
                .text('Demonstration: Form validated successfully! (Frontend simulation)')
                .fadeIn();
            
   
            setTimeout(function() {
                $('#contactForm')[0].reset();
                $('.form-control').removeClass('is-valid border-success');
                $('#formSuccess').fadeOut();
            }, 3000);
        } else {
            $('#formSuccess').hide();
        }
    });
});
