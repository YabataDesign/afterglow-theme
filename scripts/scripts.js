jQuery(document).ready( function($) {
    $('body').prepend('<img id="background" src="img/dist/background.jpg">');
});

$("#custom").click(function(e) {
    e.preventDefault();
    $("#custom-program").slideToggle("slow");
    $("#submit").fadeToggle("slow");
});

function resizeInput() {
    $(this).attr('size', $(this).val().length+0.1);
}
$('input[type="text"]').keyup(resizeInput).each(resizeInput);
