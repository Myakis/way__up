

//advantages

$(window).scroll(function () {
  $('.advantages__title').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 750) {
      $(this).addClass("fadeInLeft");
    }
  });
});

$(window).scroll(function () {
  $('.item-one').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 750) {
      $(this).addClass("bounceInLeft");
    }
  });
});

$(window).scroll(function () {
  $('.item-two').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 750) {
      $(this).addClass("bounceInDown");
    }
  });
});

$(window).scroll(function () {
  $('.item-three').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 750) {
      $(this).addClass("bounceInRight");
    }
  });
});


//dream

$(window).scroll(function () {
  $('.dream__title').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 750) {
      $(this).addClass("rollIn");
    }
  });
});


$(window).scroll(function () {
  $('.input-1').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("fadeInLeftBig");
    }
  });
});
$(window).scroll(function () {
  $('.input-2').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("fadeInRightBig");
    }
  });
});
$(window).scroll(function () {
  $('.input-3').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("fadeInLeftBig");
    }
  });
});
$(window).scroll(function () {
  $('.form__textarea').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("fadeInRightBig");
    }
  });
});
$(window).scroll(function () {
  $('.dream__button').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(this).addClass("heartBeat");
    }
  });
});


//footer




