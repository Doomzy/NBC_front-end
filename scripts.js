
$(".owl-carousel-features").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],

    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $(".owl-carousel-wwa-features").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],

    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  
  $(".owl-carousel-services").owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    nav: true,
    dots: false,
    center: true,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".owl-carousel-offers").owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    nav: true,
    dots: false,
    center: true,
    navText: ['<i class="fas fa-2x fa-chevron-left"></i>','<i class="fas fa-2x fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $(".owl-carousel-customers").owlCarousel({
    loop: true,
    margin:30,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-2x fa-chevron-left"></i>','<i class="fas fa-2x fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  });

  $('.list-btn').on('click', function () {
    $('.list-toggler').toggleClass('open');
  });
