$(document).ready(function () {

  // aos
  AOS.init();


  // gotop
  $('.gotop').hide();

  $('.gotop').click(function(){
    $('html').animate({
      scrollTop : 0
    },500);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.gotop').fadeIn();
    }
    else {
      $('.gotop').fadeOut();
    }
  });


  // header fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#header').addClass('fix');
    } else {
      $('#header').removeClass('fix');
    }
  });


  // popup
  $('.popup_close').click(function () {
    $('.popup').slideUp();
  });


  // depth2
  $('.depth2, .depth2_bg').hide();
  $('.gnb > li').hover(function () {
    $('.depth2').stop().fadeToggle();
    $('.depth2_bg').stop().fadeToggle();
  });


  // search
  $('.search_wrap').hide();
  $('.search').click(function () {
    $('.search_wrap').stop().fadeToggle();
  });
  $('.search_close').click(function () {
    $('.search_wrap').stop().fadeOut();
  });


  // mgnb_wrap
  $('.ham').click(function () {
    $('.mgnb_wrap').animate({
      'left': '0',
    });
  })

  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').animate({
      'left': '-100%'
    });
  })


  // mdepth2
  $('.mdepth2').hide();

  $('.mgnb > li').click(function () {
    $(this).find('.mdepth2').slideDown();
    $(this).siblings().find('.mdepth2').slideUp();
  });


  // main_banner
  var mb = new Swiper(".mb", {
    loop: true,
    speed: 1500,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // main_banner play/pause button
  $('.mb_play').hide();

  $('.mb_pause').click(function () {
    mb.autoplay.stop();
    $('.mb_pause').hide();
    $('.mb_play').show();
  });

  $('.mb_play').click(function () {
    mb.autoplay.start();
    $('.mb_pause').show();
    $('.mb_play').hide();
  });


  // prod_banner
  var pb = new Swiper(".pb", {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

  });


  // prod_banner pause/play
  $('.pb ul li img').mouseenter(function () {
    pb.autoplay.stop();
  });

  $('.pb ul li img').mouseleave(function () {
    pb.autoplay.start();
  });


  // heart
  $('.bi-heart-fill').hide();
  $('.bi-heart').click(function(){
    $(this).siblings('.bi-heart-fill').fadeIn();
    $(this).fadeOut();
  });
  
  $('.bi-heart-fill').click(function(){
    $(this).siblings('.bi-heart').fadeIn();
    $(this).fadeOut();
  });


  // event_banner
  var eb = new Swiper(".eb", {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

  });


  // event_banner pause/play
  $('.eb ul li img').mouseenter(function () {
    eb.autoplay.stop();
  });

  $('.eb ul li img').mouseleave(function () {
    eb.autoplay.start();
  });


  // sns_banner
  var sb = new Swiper(".sb", {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },

  });



});