function openModal(e) {
    iOS && iOS11 && (scrolledPositionBeforeOpenModal = $(document).scrollTop()), $("body, .page-header").css("padding-right", scrollbarWidth), $("body, html").addClass("modal-opened"), "header-menu" == $(e).attr("id") && $(window).width() < 768 ? $(e).addClass("active") : $(e).fadeIn(300)
}

function closeModals() {
    scrollbarWidth > 0 ? $(".popup-block:not(:hidden)").fadeOut(200, function() {
        $("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal)
    }) : ($("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal), $(".popup-block:not(:hidden)").fadeOut(200)), $("#header-menu").removeClass("active")
}

function showThanksModal() {
    $(".popup-block:not(:hidden)").fadeOut(), $("#thanks-popup").fadeIn(300)
}
var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11_0 = /OS 11_0_?(\d+)?/.test(ua),
    iOS11_1 = /OS 11_1_?(\d+)?/.test(ua),
    iOS11_2 = /OS 11_2_?(\d+)?/.test(ua),
    iOS11 = iOS11_0 || iOS11_1 || iOS11_2,
    scrolledPositionBeforeOpenModal;
iOS && iOS11 && $("body").addClass("iosBugFixCaret"), /Android/.test(navigator.appVersion) && window.addEventListener("resize", function() {
    "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || document.activeElement.scrollIntoView()
});
var block = $("<div>").css({
        height: "50px",
        width: "50px"
    }),
    indicator = $("<div>").css({
        height: "200px"
    }),
    scrollbarWidth = 0;
$("body").append(block.append(indicator));
var w1 = $("div", block).innerWidth();
block.css("overflow-y", "scroll");
var w2 = $("div", block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


$('[data-toggle="news"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

var mySwiper = new Swiper ('.overview__slider', {
  slidesPerView: 2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      },
    480: {
      slidesPerView: 1,
    },
  }
});

var mySwiper = new Swiper ('.video-block__slider', {
  slidesPerView: 2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      },
    480: {
      slidesPerView: 1,
    },
  }
});

$('.video-block__overlay').on('click', function() {
    $(this).addClass('active');
    $('.video-block__card').html('<iframe width="540" height="380" src="https://www.youtube.com/embed/2nBbwgdJwF8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});


var mySwiper = new Swiper ('.updates-block__swiper-slider', {
    slidesPerView: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 120,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 180,
      },
    },
    on: {
      slideNextTransitionStart: function () {
         $('.swiper-button-prev').addClass('active');
      },
    },
}); 

$('.updates-block__slick-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="prev updates-block__arrow"></button>',
  nextArrow: '<button class="next updates-block__arrow"></button>',
});