$('.slider__inner').slick({
    nextArrow: '<button class="slick-next slick-next"><img src="images/slider/next.svg" alt="next arrow"></button>', 
    prevArrow: '<button class="slick-prev slick-arrow"><img src="images/slider/prev.svg" alt="next arrow"></button>',    
    asNavFor: '.thumbs',
    fade:true,

});

$('.thumbs').slick({
  slidesToShow: 6,
  slidesToScroll: 1,  
  asNavFor: '.slider__inner',
  focusOnSelect: true,    
  arrows: false,
  responsive: [
      {
        breakpoint: 960,
        settings: {
        slidesToShow: 5,

        }
      },
      {
        breakpoint: 750,
        settings: {
        slidesToShow: 4,

        }
      },
      {
        breakpoint: 650,
        settings: {
        slidesToShow: 3,
        }
      },
      
  ]  


});

$('.header__menu-btn').on('click', function(){
    $('.header__menu > ul') .slideToggle();
});
      