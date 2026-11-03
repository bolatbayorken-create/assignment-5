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

   
    $('#tipsContactForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        let name = $('#tipNameInput').val().trim();
        let email = $('#tipEmailInput').val().trim();
        let message = $('#tipMessageInput').val().trim();
        
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
       
        if (name === "") {
            $('#tipNameInput').addClass('is-invalid');
            $('#tipNameError').show();
            isValid = false;
        } else {
            $('#tipNameInput').removeClass('is-invalid').addClass('is-valid');
            $('#tipNameError').hide();
        }
        
      
        if (email === "" || !emailRegex.test(email)) {
            $('#tipEmailInput').addClass('is-invalid');
            $('#tipEmailError').show();
            isValid = false;
        } else {
            $('#tipEmailInput').removeClass('is-invalid').addClass('is-valid');
            $('#tipEmailError').hide();
        }
        
        
        if (message.length < 10 || message.length > 500) {
            $('#tipMessageInput').addClass('is-invalid');
            $('#tipMessageError').show();
            isValid = false;
        } else {
            $('#tipMessageInput').removeClass('is-invalid').addClass('is-valid');
            $('#tipMessageError').hide();
        }
        
       
        if (isValid) {
            $('#tipFormSuccess')
                .text('Demonstration: Subscribed successfully! (Frontend simulation)')
                .fadeIn();
            
            setTimeout(function() {
                $('#tipsContactForm')[0].reset();
                $('.form-control').removeClass('is-valid is-invalid');
                $('#tipFormSuccess').fadeOut();
            }, 3000);
        } else {
            $('#tipFormSuccess').hide();
        }
    });
});
