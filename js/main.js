$(function () {
  $(".burger").on("click", function (e) {
    e.preventDefault()
    $(".burger").toggleClass("burger-active")
    $(".header__nav").toggleClass("header__nav-active")
    $(".header__item").toggleClass("header__item-active")
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('overflow-hidden')
  })

  $(".overlay, burger-active, .header__nav, .header__nav-list, .header__item, .header__nav-link").click(function (e) {
    e.preventDefault()
    $(".burger").removeClass("burger-active")
    $(".header__nav").removeClass("header__nav-active")
    $(".header__item").removeClass("header__item-active")
    $('.overlay').removeClass('overlay--show')
    $('body').removeClass('overflow-hidden')
  });

  window.onscroll = function headerShow() {
    var header__inner = document.querySelector('.header__inner-wrapper');
    if (window.pageYOffset > 200) {
      header__inner.classList.add('header__inner-fixed');
    }
    else {
      header__inner.classList.remove('header__inner-fixed');
    }
    
  }

  $(".header__nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 2000);
  });

  $('.about__sliders').slick({
    arrows: false,
    dots: false,
    appendDots: $('.box-arrows'),
    waitForAnimate: false,
  })

  $('.arroew-prev').on('click', function (e) {
    e.preventDefault()
    $('.about__sliders').slick('slickPrev')
  })
  $('.arroew-next').on('click', function (e) {
    e.preventDefault()
    $('.about__sliders').slick('slickNext')
  })

  $('.questions__item-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__item-link--active')) {
      $(this).removeClass('questions__item-link--active')
      $(this).children('.questions__item-text').slideUp()
    } else {
      $('.questions__item-link').removeClass('questions__item-link--active')
      $('.questions__item-text').slideUp()
      $(this).addClass('questions__item-link--active')
      $(this).children('.questions__item-text').slideDown()
    }
  })

  const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.artists__slider-arroew-next',
      prevEl: '.artists__slider-arroew-prev'
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.release__slider-arroew-next',
      prevEl: '.release__slider-arroew-prev'
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    watchSlidesProgress: true,
  });

  $(function () {
    var $video = $('.video');
    var $window = $(window);
    $window.scroll(function () {
      var $topOfVideo = $video.offset().top;
      var $bottomOfVideo = $video.offset().top + $video.outerHeight();
      var $topOfScreen = $window.scrollTop();
      var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
      if (($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)) {
        $video[0].play();
      } else {
        $video[0].pause();
      }
    });
  });

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();

});

