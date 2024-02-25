// product detail2

$(function () {
  var sync3 = $("#sync3");
  var sync4 = $("#sync4");
  var slidesPerPage = 4;
  var syncedSecondary = true;

  sync3
    .owlCarousel({
      items: 1,
      rtl: true,
      slideSpeed: 2000,
      nav: false,
      autoplay: false,
      dots: true,
      loop: true,
      responsiveRefreshRate: 200,
    })
    .on("changed.owl.carousel", syncPosition);

  sync4
    .on("initialized.owl.carousel", function () {
      sync4.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      items: 7,
      rtl: true,
      margin: 14,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage,
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    sync4
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync4.find(".owl-item.active").length - 1;
    var start = sync4.find(".owl-item.active").first().index();
    var end = sync4.find(".owl-item.active").last().index();

    if (current > end) {
      sync4.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync4.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync3.data("owl.carousel").to(number, 100, true);
    }
  }

  sync4.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync3.data("owl.carousel").to(number, 300, true);
  });

  $(".shop-detail-carousel .owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    navText: [
      '<i class="ti ti-chevron-left"></i>',
      '<i class="ti ti-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });
});
