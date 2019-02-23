window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar");
// alert($(".navbar").offset().top);
var navbar = $(".navbar");
var sticky = navbar.offset().top;
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky")
    navbar.css({'overflow':'visible'});
    } else {
    navbar.removeClass("sticky");
    navbar.css({'overflow':'hidden'});
    }
}

