$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); 

        let isValid = true;

  
        $('.error-text').remove();
        $('.form-control').removeClass('is-invalid');

    
        const $name = $('#nameInput');
        if ($name.val().trim() === '') {
            $name.addClass('is-invalid');
            $name.after('<div class="error-text text-danger small mt-1">Please enter your name.</div>');
            isValid = false;
        }

 
        const $email = $('#emailInput');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ($email.val().trim() === '') {
            $email.addClass('is-invalid');
            $email.after('<div class="error-text text-danger small mt-1">Email address is required.</div>');
            isValid = false;
        } else if (!emailRegex.test($email.val().trim())) {
            $email.addClass('is-invalid');
            $email.after('<div class="error-text text-danger small mt-1">Please enter a valid email address (e.g., user@example.com).</div>');
            isValid = false;
        }

        const $message = $('#messageInput');
        if ($message.val().trim().length < 10) {
            $message.addClass('is-invalid');
            $message.after('<div class="error-text text-danger small mt-1">Message must be at least 10 characters long.</div>');
            isValid = false;
        }


        if (isValid) {
         
            let $successMsg = $('#formSuccessMessage');
            if ($successMsg.length === 0) {
                $('#contactForm').prepend('<div id="formSuccessMessage" class="alert alert-success mb-3"></div>');
                $successMsg = $('#formSuccessMessage');
            }
            $successMsg.text('Demonstration: Form validated successfully! (No backend connected, data was not actually sent).').show();

            
            this.reset();
        }
    });
});
