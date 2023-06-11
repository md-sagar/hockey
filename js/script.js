//testimonial slider
$(".slider").slick({
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>'
});

// books slider

$('.books-slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });