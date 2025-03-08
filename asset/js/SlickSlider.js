 // Slick Slider

 $(document).ready(function () {
    $(".list").slick({
      dots: false,
      speed: 750,
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      arrows: false,
      draggable: true,
      touchThreshold: 300,
      responsive: [
        {
          // tablet
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            swipeToSlide: true,
          },
        },
        {
          // mobile portrait
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".slider-prev").click(function () {
      $("#slider-id").slick("slickPrev");
    });

    $(".slider-next").click(function () {
      $("#slider-id").slick("slickNext");
    });
  });