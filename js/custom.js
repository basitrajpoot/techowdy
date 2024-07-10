new WOW().init();

jQuery(document).ready(function() {
    jQuery('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = jQuery(target);
        jQuery('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            jQuery(".section").removeClass("active");
            jQuery(target).addClass("active");
            //window.location.hash = target;
        });
    });
});

jQuery(document).scroll(function() {
    var cutoff = jQuery(window).scrollTop();
    var cutoffRange = cutoff + 100;

    // Find current section and highlight nav menu
    var curSec = jQuery.find('.current');
    var curID = jQuery(curSec).attr('id');
    var curNav = jQuery.find('a[name=' + curID + ']');
    jQuery(curNav).addClass('active');

    jQuery('.section').each(function() {
        if (jQuery(this).offset().top + jQuery(this).height() > cutoff) {
            jQuery('.section').removeClass('current')
            jQuery(this).addClass('current');
            if (jQuery(".blacknav").is(".current")) {
                //alert("blacknav");
                $(".opensidemenu").css("color", "#1e2b31");
                $(".opensidemenu .bar1, .opensidemenu .bar2").css("background-color", "#1e2b31");
            } else {
                //alert("blacknav");
                $(".opensidemenu").css("color", "#fff");
                $(".opensidemenu .bar1, .opensidemenu .bar2").css("background-color", "#fff");
            }
            return false; // stops the iteration after the first one on screen
        }
    });
});

jQuery(window).scroll(function() {
    var sticky = jQuery('.header'),
        sticky1 = jQuery('.movetop'),
        scroll = jQuery(window).scrollTop();

    if (scroll >= 200) {
        sticky.addClass('fixed');
        sticky1.addClass('fixed');
        //sticky.slideDown(250);
    } else {
        sticky.removeClass('fixed');
        sticky1.removeClass('fixed');
        //sticky.removeAttr('style');
    }
});

//toggle menu
function openmenu() {
    jQuery(".opensidemenu").toggleClass('change');
    jQuery(".menudivv").toggleClass("active");
}

jQuery(document).ready(function() {

    jQuery(".menudivv a").click(function() {
        openmenu();
    });

});



jQuery(document).ready(function() {
    jQuery(".reviews_ul").slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 414,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});


jQuery(document).ready(function() {
    $("#contactform").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            msg: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            msg: "Please enter your message"
        }
    });
});