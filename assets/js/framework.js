/* ============================================================
   Framework OPS — Inicializações locais
   Fernando Consultoria Ambiental
   ============================================================ */

$(document).ready(function () {

  /* --- Carousel Bootstrap (banner) --- */
  /* O Bootstrap 5 inicializa automaticamente via data-bs-ride */

  /* --- Slick: Serviços --- */
  if ($('.slick-servicos').length && !$('.slick-servicos').hasClass('slick-initialized')) {
    $('.slick-servicos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="bi bi-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="bi bi-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
  }

  /* --- Slick: Depoimentos --- */
  if ($('.slick-reviews').length && !$('.slick-reviews').hasClass('slick-initialized')) {
    $('.slick-reviews').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="bi bi-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="bi bi-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
  }

  /* --- FAQ Accordion manual --- */
  $(document).on('click', '.accordion-header', function () {
    var target = $(this).data('bs-target');
    var expanded = $(this).attr('aria-expanded') === 'true';

    // Fecha todos
    $('.accordion-collapse').removeClass('show');
    $('.accordion-header').attr('aria-expanded', 'false');

    // Abre o clicado se estava fechado
    if (!expanded) {
      $(target).addClass('show');
      $(this).attr('aria-expanded', 'true');
    }
  });

  /* --- Cookie bar --- */
  var cookie = localStorage.getItem("ops_privacy_accepted");
  if (!cookie) {
    $('#cookie-law-info-bar').show();
  }

  $('#cookie-law-info-bar a.accept_legal_majority').on('click', function (e) {
    e.preventDefault();
    $('#cookie-law-info-bar').fadeOut('slow');
    localStorage.setItem("ops_privacy_accepted", "true");
  });

  /* --- Smooth scroll para âncoras --- */
  $('a[href^="#"], a[href*="#"]').on('click', function (e) {
    var href = $(this).attr('href');
    var hash = href.indexOf('#') !== -1 ? '#' + href.split('#')[1] : null;
    if (hash && $(hash).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 600);
      // Fecha navbar mobile se aberta
      $('.navbar-collapse').collapse('hide');
    }
  });

  /* --- Navbar mobile: fecha ao clicar num item --- */
  $('.nav-item[data-toggle="click"]').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

});
