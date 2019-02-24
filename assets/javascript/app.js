var internalScrollingEvent = false;
var scrollToPosition = {
        left: 0,
        top: 0
}
$(document).ready(function(){
    // $(this).scrollTop(0);
    // $(window).scrollTop();  // Frustratingly, this doesn't work. gave up after several hours of trying & testing different things
    scrollToPosition.top = 100;
    internalScrollingEvent=true;
    window.scrollTo(0, 0);
    window.onscroll = function() {myFunction()};
    var navbar = $(".navbar");
    var sticky = navbar.offset().top;
    var about = $("#grid-about").offset().top;
    var contact = $("#grid-contact").offset().top;
    var portfolio = $("#grid-portfolio").offset().top;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.addClass("sticky")
            navbar.css({'overflow':'visible'});
        } else {
            navbar.removeClass("sticky");
            navbar.css({'overflow':'hidden'});
        }
        if (internalScrollingEvent) {
            window.scrollTo(0, scrollToPosition.top -100);  // subtract 100 to deal with disappearing header
            internalScrollingEvent=false;   // turn this off or else we will infinitely loop
        }
    }
    $(document).on('click', '.navbar', function(event) {
        // build the id string that will be the target of the scroll action
        var myElement = '#grid-' + $(event.target).attr('id');
        scrollToPosition.left = 0;
        scrollToPosition.top = $(myElement).position().top
        internalScrollingEvent=true;
        // Crazily, this doesn't move to the specified target because it triggers a scroll 
        // function, above. So we actually end up doing the scrolling action in the scroll 
        // response function
        window.scrollTo(0, scrollToPosition.top);   
    });
});
