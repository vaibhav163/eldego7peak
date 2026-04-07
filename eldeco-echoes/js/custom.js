$(function() {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    "use strict";

    $(".form-close").click(function() {
        $(".stickyForm").stop().hide(300);
        $(".enquiryBtn").show();
    });
    $(".enquiryBtn").click(function() {
        $(".stickyForm").stop().show(300);
        $(this).hide();
    });
    let formInterval = setInterval(function() {
        $(".stickyForm").stop().show(300);
        $(".enquiryBtn").hide();
    }, 20000);

    if ($(window).innerWidth() < 576) {
        clearInterval(formInterval);
    }

    $(".menuBtn").click(function() {
        $(this).toggleClass("closeMenuBtn");
        $(".menuContainer").stop().slideToggle(300);
        $("body").toggleClass("overflow-hidden");
    });
    $(".menuContainer li").click(function() {
        $(".menuBtn").toggleClass("closeMenuBtn");
        $(".menuContainer").stop().slideToggle(300);
        $("body").toggleClass("overflow-hidden");
    });

    // $(".hasChild").click(function() {
    // 	$(".dropdown").slideUp(500);
    // 	if($(this).find(".dropdown").is(':hidden') === true) {
    // 		$(this).find(".dropdown").slideDown('normal');
    // 	 }
    // });

    $(".moreBtn").click(function() {
        if ($(this).html() === 'Read more <i class="fa fa-arrow-right"></i>') {
            $(this).html('Read less <i class="fa fa-chevron-up"></i>');
        } else {
            $(this).html('Read more <i class="fa fa-arrow-right"></i>');
        }
        $(".moreText[data-hit=more" + $(this).data('target') + "]").slideToggle(500);
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.button-top').animate({
                opacity: 1
            }, 0);
        } else {
            $('.button-top').animate({
                opacity: 0
            }, 0);
        }
    });
    $(".button-top").click(function() {
        $("html,body").animate({
            scrollTop: '0px'
        }, 500);
    });

    AOS.init({
        duration: 1200,
    });
});




// 
window.addEventListener('scroll', function() {
    const icon = document.querySelector('.callIcon');
    if (window.scrollY > 50) {
        icon.style.filter = 'invert(0)';
    } else {
        icon.style.filter = 'invert(1)';
    }
});

//   formModal