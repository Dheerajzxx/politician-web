$(document).on('ready', function () {
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

$(document).ready(function () {
    $("#details-bar, #details-close").click(function () {
        $("#details-dropdown").slideToggle("slow");
    });    
});