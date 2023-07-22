$(function () {
  $(".burger__404").on("click", function (e) {
    e.preventDefault()
    $(".burger__404").toggleClass("burger__404-active")
    $(".header__nav-404").toggleClass("header__nav-404-active")
    $(".header__item-404").toggleClass("header__item-404-active")
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('overflow-hidden')
  })

  $(".overlay, burger__404-active, .header__nav-404, .header__nav-404-list, .header__item-404, .header__nav-404-link").click(function (e) {
    e.preventDefault()
    $(".burger__404").removeClass("burger__404-active")
    $(".header__nav-404").removeClass("header__nav-404-active")
    $(".header__item-404").removeClass("header__item-404-active")
    $('.overlay').removeClass('overlay--show')
    $('body').removeClass('overflow-hidden')
  });

  window.onscroll = function headerShow() {
    var header__inner = document.querySelector('.header__inner-404');
    if (window.pageYOffset > 200) {
      header__inner.classList.add('header__inner-fixed');
    }
    else{
      header__inner.classList.remove('header__inner-fixed');
    }
  }

  $(".header__nav-404").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 2000);
  });

  $(".redirect-main").on("click", function (event) {
    event.preventDefault();
    document.location.href = 'index.html#Main';
  });

  $(".redirect-about").on("click", function (event) {
    event.preventDefault();
    document.location.href = 'index.html#About_us';

  });
  $(".redirect-questions").on("click", function (event) {
    event.preventDefault();
    document.location.href = 'index.html#Frequent_questions';

  });
  $(".redirect-artists").on("click", function (event) {
    event.preventDefault();
    document.location.href = 'index.html#Artists';

  });
  $(".redirect-release").on("click", function (event) {
    event.preventDefault();
    document.location.href = 'index.html#Releases';
  });
});