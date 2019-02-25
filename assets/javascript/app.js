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

    // disable contact form button to start 
    // $('#my-button').attr("disabled", "disabled");
    var myButton = $("#my-button");
    myButton.prop('disabled', true);    // Why does this not work?????
    document.getElementById("my-button").disabled = true;   // Why does this not work?????
    // myButton.hide();
    myButton.css('color', 'gray');    // Why does this not work?????

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
    $('.my-contact-form').on('keyup', function(event) {
        // This function does user input validation and checks whether or not the user has
        //  set a value for each of the required select inputs in the review form
        var disable=false;
        $('form input').each(
            function(index){  
                var input = $(this).val();
                if (input === "") {
                    disable=true;
                }
            }
        );
        if (disable) {
            myButton.prop('disabled', true);    // Why does this not work?????
            myButton.css('color', 'gray');    // Why does this not work?????
        }
        else {
            myButton.css('color', 'black');    // Why does this not work?????
            myButton.removeAttr("disabled");
            // myButton.show();
        }
        // Following code doesn't work. Event though the button is disabled,
        // it still displays normally. Not worth the time to figure out what
        // library is clobbering what should be the normal css behavior

        // if (disable) {
        //     $('#my-button').attr("disabled", "disabled");
        // } else {
        //     $('#my-button').removeAttr("disabled");
        // }
        console.log("Button state=" + $('#my-button').attr("disabled"));
      });
    $(document).on('click', '#my-button', function() {
        var disabled=false;
        $('form input').each(
            function(index){  
                var input = $(this).val();
                if (input === "") {
                    disabled=true;
                }
            }
        );
        if (disabled) {
            $('#my-button').attr("disabled", "disabled");
        }
    });
});
