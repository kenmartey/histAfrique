/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {

    // Style Switcher	
    $('#style-switcher').animate({
        left: '-961px'
    });

    $('#style-switcher h2 a').click(function(e) {
        e.preventDefault();
        var div = $('#style-switcher');
        if (div.css('left') === '-961px') {
            $('#style-switcher').animate({
                left: '0px'
            });
        } else {
            $('#style-switcher').animate({
                left: '-961px'
            });
        }
    })
    $('#style-switcher li a').on('click', function() {

        var name = $(this).attr('class');
        name = "stylesheets/colors/" + name + ".css";
        $("#colors").attr("href", name);
        return false;
    });
});
