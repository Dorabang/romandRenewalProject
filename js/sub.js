$(document).ready(function () {

    // aos
    AOS.init();


    // gotop
    $('.gotop').hide();

    $('.gotop').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
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



    /* -------------------------------------------------------------------
    shop.html
    ------------------------------------------------------------------- */

    // best_banner
    var bb = new Swiper(".bb", {
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 20,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        scrollbar: {
            el: ".swiper-scrollbar",
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
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1700: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },

    });


    // best_banner pause/play
    $('.bb ul li img').mouseenter(function () {
        bb.autoplay.stop();
    });

    $('.bb ul li img').mouseleave(function () {
        bb.autoplay.start();
    });



    // heart
    $('.bi-heart-fill').hide();
    $('.bi-heart').click(function () {
        $(this).siblings('.bi-heart-fill').fadeIn();
        $(this).fadeOut();
    });

    $('.bi-heart-fill').click(function () {
        $(this).siblings('.bi-heart').fadeIn();
        $(this).fadeOut();
    });



    // product tap menu
    $('.shop_category li:first-child').addClass('active');
    $('.shop_category li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.shop_category li.c_all').click(function(){
        $('.prod_list li').show();
    });

    $('.shop_category li.c_base').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.base').show();
    });

    $('.shop_category li.c_eye').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.eye').show();
    });

    $('.shop_category li.c_lip').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.lip').show();
    });

    $('.shop_category li.c_nail').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.nail').show();
    });

    $('.shop_category li.c_tool').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.tool').show();
    });

    $('.shop_category li.c_set').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.set').show();
    });

    $('.shop_category li.c_edition').click(function(){
        $('.prod_list li').hide();
        $('.prod_list li.edition').show();
    });


    // shop_tab
    var shop_tab = new Swiper(".shop_tab", {
        loop: false,
        speed: 1500,
        slidesPerView: 6,

        breakpoints: {
            768: {  // 가로해상도가 768px 이상일 경우
                slidesPerView: 8,
            },
        },

    });


    
    /* -------------------------------------------------------------------
    event.html
    ------------------------------------------------------------------- */

    // event_tab
    var event_tab = new Swiper(".event_tab", {
        loop: false,
        speed: 1500,
        slidesPerView: 3,
    });


    // product tap menu
    $('.event_category li:first-child').addClass('active');
    $('.event_category li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.event_category li.c_all').click(function(){
        $('.event_list li').show();
    });

    $('.event_category li.c_ing').click(function(){
        $('.event_list li').hide();
        $('.event_list li.ing').show();
    });

    $('.event_category li.c_end').click(function(){
        $('.event_list li').hide();
        $('.event_list li.end').show();
    });

});