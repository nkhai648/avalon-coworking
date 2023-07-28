$(document).ready(function() {
    var navigation = $('.navigation')
    console.log(navigation);  
    navigation.click(function() {

        if(navigation.hasClass('open')) {
            navigation.removeClass('open')
            $(this).find('.bar2').show('.2s', 'swing' )
            $('.list-menu').slideUp('slow')

        }else {
            navigation.addClass('open')
            $(this).find('.bar2').hide('.2s', 'swing' )
            $(this).find('.bar1').addClass('bar1-navigation')
            $(this).find('.bar3').addClass('bar3-navigation')

            $('.list-menu').slideDown('slow')
        }
        
    })


    $('#main-banner').owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        smartSpeed:450,
        loop:true,
        // autoplay:true,
        // autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    
    $('.about .owl-carousel').owlCarousel({
        items:1,
        smartSpeed:1000,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    
    $('.partner .owl-carousel').owlCarousel({
        items:2,
        smartSpeed:1000,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

})