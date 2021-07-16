$(function(){
    
    $('.slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
        autoplay: false,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ]
    });


    $('.tab').on('click', function(e){
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs__item').removeClass('tabs__item--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__item--active');

    });

    $('.tab:first').click();
    

    $('.tab').on('click', function(){
        $('.slider').slick("refresh");
    });


    $('.rate').rateYo({
        starWidth: '15px',
        ratedFill: '#FF352B',
        rating: '100%',
        numStars: 5,
        readOnly: true,
        spacing: '0.5px'
    });


    $('#check').styler();

    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});