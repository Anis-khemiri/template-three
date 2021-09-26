// globale $ , alert, console 
$(function  () {

'use strict';


// adjust header height

var myHeader = $(' .header');

myHeader.height($(window).height());

$(window).resize(function () {

myHeader.height($(window).height());

// adjust slider item Center
$('.slider').each(function (){
    $(this).css('paddingTop', ($(window).height() - $('.slider .ms').height()) /2);

});


});




// link add class active


$('.Links li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});

});


$(document).ready(function(){
$('.slider').bxSlider();
});

// adjust slider item Center
$('.slider').each(function (){
$(this).css('paddingTop', ($(window).height() - $('.slider .ms').height()) /2);

});
// scroll to div

$('.Links li a').click(function () {

$('html, body').animate({

scrollTop: $('#' + $(this).data('value')).offset().top

}, 1000);

});
 

// our auto slider code
(function autoSlider() {

    $('.slider1 .active').each(function () {

        if (!$(this).is(':last-child')) {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoSlider();

            });

        } else {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active');

                $('.slider1 div').eq(0).addClass('active').fadeIn();

                autoSlider();

            });

        }

    });

}());


// trigger Mixitup

var mixer = mixitup('#Container');



var mixer = mixitup('#Container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});      
    
// adjust Shuffle links
$('.shuffle li').click(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
});
// trigger nice scroll

 
    $('html').niceScroll({

        cursorcolor: '#1abc9c',

        cursorwidth: '10px',

        cursorborder: '1px solid #1abc9c',

        cursorborderradius: 0

    });