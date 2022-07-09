/* Counter */
(function ($) {
    'use strict';

    $('.count-num').rCounter();
})(jQuery);

/* Mobile Menu */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Play Video */
var vid = document.getElementById("vid1");
var play1 = document.getElementById("play");
var pause1 = document.getElementById("pause");

function playVid() {
    vid.play();
    vid.playbackRate = 2.5;
    play1.style.display = "none";
    pause1.style.display = "block";
}
function pauseVid() {
    vid.pause();
    play1.style.display = "block";
    pause1.style.display = "none";
}

/* Slick */
$(document).ready(function () {

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4800,
        responsive: [{
            breakpoint: 1024,
            settings: "unslick"
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

});

$(document).ready(function () {

    $('.room-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4800,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

});