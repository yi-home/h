function gridResize() {
  cols = $("#column-right, #column-left").length;
  if (cols == 2) {
    $("#content .product-layout").attr(
      "class",
      "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
    );
    $("#content .product-layout:nth-child(3n+1)").addClass("first-item");
    $("#content .product-layout:nth-child(3n+3)").addClass("last-item");
  } else if (cols == 1) {
    $("#content .product-layout").attr(
      "class",
      "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
    );
    $("#content .product-layout:nth-child(3n+1)").addClass("first-item");
    $("#content .product-layout:nth-child(3n+3)").addClass("last-item");
    if (
      document.documentElement.clientWidth < 1200 &&
      document.documentElement.clientWidth > 991
    ) {
      $("#content .product-layout").attr(
        "class",
        "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
      );
      $("#content .product-layout:nth-child(2n+1)").addClass("first-item");
      $("#content .product-layout:nth-child(2n+2)").addClass("last-item");
    }
    if (
      document.documentElement.clientWidth < 992 &&
      document.documentElement.clientWidth > 767
    ) {
      $("#content .product-layout").attr(
        "class",
        "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
      );
      $("#content .product-layout:nth-child(2n+1)").addClass("first-item");
      $("#content .product-layout:nth-child(2n+2)").addClass("last-item");
    }
    if (document.documentElement.clientWidth < 768) {
      $("#content .product-layout").attr(
        "class",
        "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
      );
      $("#content .product-layout:nth-child(2n+1)").addClass("first-item");
      $("#content .product-layout:nth-child(2n+2)").addClass("last-item");
    }
    if (document.documentElement.clientWidth < 479) {
      $("#content .product-layout").attr(
        "class",
        "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12 last-item"
      );
      $("#content .product-layout").attr(
        "class",
        "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12 last-item"
      );
    }
  } else {
    $("#content .product-layout").attr(
      "class",
      "product-layout product-grid col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"
    );
    $("#content .product-layout:nth-child(3n+1)").addClass("first-item");
    $("#content .product-layout:nth-child(3n+3)").addClass("last-item");
  }
}
$(document).ready(function () {
  gridResize();
});
$(window).resize(function () {
  gridResize();
});

var widthClassOptions = [];
var widthClassOptions = {
  bestseller: "bestseller_default_width",
  featured: "featured_default_width",
  special: "special_default_width",
  latest: "latest_default_width",
  related: "related_default_width",
  additional: "additional_default_width",
  module: "module_default_width",
  tabbestseller: "tabbestseller_default_width",
  tabfeatured: "tabfeatured_default_width",
  tabspecial: "tabspecial_default_width",
  tablatest: "tablatest_default_width",
  testimonial: "testimonial_default_width"
};

$(window).on('load', function () {
  $("#content select").customSelect();
  $("ul.breadcrumb").appendTo("#breadcrumb .container");
  $(".aboutus h1, .affiliate-success h1").prependTo("#breadcrumb .container");

  /* Js for Parallax */
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  );
  if (!isMobile) {
    if ($(".parallax").length) {
      $(".parallax").sitManParallax({
        invert: false
      });
    }
  } else {
    $(".parallax").sitManParallax({
      invert: true
    });
  }

  if ($(document).width() <= 979) {
    $(".header .dropdown.search").appendTo(".header .header-right");
    $(".header .main-menu").appendTo(".header .header-left");
    $(".header .header-cart").appendTo(".header .header-left");
    $(".header .dropdown.myaccount").appendTo(".header .header-left");
    $(".header .header-menu-search").appendTo(".header .header-left");
  }

  $("#cart > .dropdown-toggle").click(function () {
    $(this).toggleClass("active");
    $(".cart-menu").slideToggle("slow");
    $(".myaccount-menu").slideUp("slow");
    /* $(".language-menu").slideUp("slow");
			$(".currency-menu").slideUp("slow"); */
    $(".myaccount .dropdown-menu").slideUp("active");
    $(".menu_toggle").slideUp("slow");
    /* $("#search").slideUp("slow");
			$(".header-search.dropdown-toggle").removeClass('active'); */
    return false;
  });

  $(".myaccount > .dropdown-toggle").click(function () {
    $(".myaccount-menu").slideToggle("slow");
    $(this).toggleClass("active");
    $(".cart-menu").slideUp("slow");
    /* $(".language-menu").slideUp("slow");
			$(".currency-menu").slideUp("slow"); */
    $("#cart .dropdown-toggle").removeClass("active");
    $(".menu_toggle").slideUp("slow");
    $("#wish-list .wish-list-details").slideUp("slow");
    /*  $("#search").slideUp("slow"); */
    $(".header-search.dropdown-toggle").removeClass("active");
    return false;
  });

  $(".nav-full-wrapper .search-toggle").click(function () {
    $(this).toggleClass("active");
    $(".nav-full-wrapper #search").slideToggle("slow");
    $(".cart-menu").slideUp("slow");
    $("#wish-list .wish-list-details").slideUp("slow");
    $(".myaccount .dropdown-menu").slideUp("slow");

    $(".menu_toggle").slideUp("slow");
    return false;
  });

  $(".wish-details").click(function () {
    $(this).toggleClass("active");
    /* $("#cart .dropdown-menu").slideUp("slow"); */
    $(".myaccount .dropdown-menu").slideUp("slow");

    return false;
  });

  $(".filterbox .list-group-items a").click(function () {
    $(this)
      .toggleClass("collapsed")
      .next(".list-group-item")
      .slideToggle();
  });

  $(".write-review, .review-count").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#tabs_info").offset().top
      },
      "slow"
    );
  });

  if ($(window).width() > 979) {
    $("#pxzoom1,#pxzoom2,#pxzoom3").elevateZoom({
      gallery: "additional-carousel",
      zoomType: "lens",
      lensShape: "round",
      lensSize: 200
    });
    var z_index = 0;

    $(document).on("click", ".thumbnail", function () {
      $(".thumbnails").magnificPopup("open", z_index);
      return false;
    });

    $(".additional-carousel a").click(function () {
      var smallImage = $(this).attr("data-image");
      var largeImage = $(this).attr("data-zoom-image");
      var ez = $("#tmzoom").data("elevateZoom");
      $(".thumbnail").attr("href", largeImage);
      ez.swaptheimage(smallImage, largeImage);
      z_index = $(this).index(".additional-carousel a");
      return false;
    });
  } else {
    $(document).on("click", ".thumbnail", function () {
      $(".thumbnails").magnificPopup("open", 0);
      return false;
    });
  }
  $(document).ready(function () {
    $(".thumbnails").magnificPopup({
      delegate: "a.elevatezoom-gallery",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title");
        }
      }
    });
  });
});

function mobileToggleMenu() {
  //alert($(window).width());
  if ($(window).width() < 980) {
    $("#footer .mobile_togglemenu").remove();
    $("#footer .column h5").append("<i class='fas mobile_togglemenu'> </i>");
    $("#footer .column h5").addClass("toggle");
    $("#footer .mobile_togglemenu").click(function () {
      $(this)
        .parent()
        .toggleClass("active")
        .parent()
        .find("ul")
        .toggle("slow");
    });
  } else {
    $("#footer .column h5")
      .parent()
      .find("ul")
      .removeAttr("style");
    $("#footer .column h5").removeClass("active");
    $("#footer .column h5").removeClass("toggle");
    $("#footer .mobile_togglemenu").remove();
  }
}
$(document).ready(function () {
  mobileToggleMenu();
});
$(window).resize(function () {
  mobileToggleMenu();
});

function menuResponsive() {
  //alert($(window).width());
  if ($(window).width() < 980) {
    $(".nav.navbar-nav").css("display", "none");
    $("#menu").addClass("responsive-menu");
    $("#menu").removeClass("main-menu");
    $(".nav-responsive").css("display", "block");
    $("#menu .mobile_togglemenu").remove();
    $("#menu ul li.dropdown").append("<i class='fas mobile_togglemenu'> </i>");
    $("#menu ul li.dropdown").addClass("toggle");

    $("#menu .nav > li.dropdown .mobile_togglemenu").click(function () {
      $(this)
        .parent()
        .toggleClass("active");
      $(this)
        .siblings("li .dropdown-menu")
        .slideToggle("slow");
    });
  } else {
    $("#menu").addClass("main-menu");
    $("#menu").removeClass("responsive-menu");
    $("#menu ul li.dropdown")
      .parent()
      .find("li .dropdown-menu")
      .removeAttr("style");
    $("#menu ul li.dropdown").removeClass("active");
    $("#menu ul li.dropdown").removeClass("toggle");
    $("#menu .mobile_togglemenu").remove();
    $(".nav-responsive").css("display", "none");
    $(".nav.navbar-nav").css("display", "block");
  }
}
$(document).ready(function () {
  menuResponsive();
});
$(window).resize(function () {
  menuResponsive();
});

$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $("ul.dropdown-toggle").toggle("slow");
  });
});

function LangCurDropDown(selector, subsel) {
  var main_block = new HoverWatcher(selector);
  var sub_ul = new HoverWatcher(subsel);
  $(selector).click(function () {
    $(selector).addClass("active");
    $(subsel).slideToggle("slow");
    setTimeout(function () {
      if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
        $(subsel)
          .stop(true, true)
          .slideUp(480);
      $(selector).removeClass("active");
    }, 3000);
  });

  $(subsel).hover(function () {
    setTimeout(function () {
      if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
        $(subsel)
          .stop(true, true)
          .slideUp(480);
    }, 3000);
  });
}

$(document).ready(function () {
  LangCurDropDown("#cart", ".cart-menu");
});

function leftright() {
  if ($(window).width() < 980) {
    if (
      $(
        ".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1"
      ).hasClass("text-right") == true
    ) {
      $(
        ".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1"
      ).addClass("text-left");
      $(
        ".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1"
      ).removeClass("text-right");
    }
  }
}

$(window).resize(function () {
  leftright();
});

$(document).ready(function () {
  jQuery(function ($) {
    var max_elem = 6;
    if ($(window).width() <= 1299) {
      max_elem = 3;
    }
    if ($(window).width() <= 979) {
      max_elem = 10;
    }

    $(".header .header-top li")
      .first()
      .addClass("home_first");
    var items = $(".header .header-top li.top_level");
    var surplus = items.slice(max_elem, items.length);
    surplus.wrapAll(
      '<li class="top_level hiden_menu dropdown"><div class="dropdown-menu megamenu"><div class="dropdown-inner">'
    );
    //$(".hiden_menu").prepend('<a href="#" class="level-top">其他</a>');
  });
});

function mobileToggleColumn() {
  if ($(window).width() < 980) {
    $("#column-left,#column-right").insertAfter("#content");
    $(
      "#column-left .title-wrapper .mobile_togglemenu,#column-right .title-wrapper .mobile_togglemenu"
    ).remove();
    $("#column-left .title-wrapper,#column-right .title-wrapper").append(
      "<i class='fas mobile_togglemenu'> </i>"
    );
    $("#column-left .title-wrapper,#column-right .title-wrapper").addClass(
      "toggle"
    );
    $(
      "#column-left .title-wrapper .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu"
    )
      .parent()
      .toggleClass("active")
      .parent()
      .find(".box-content,.sidebarFilter,.list-group")
      .slideToggle("slow");
    $(
      "#column-left .title-wrapper .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu"
    ).click(function () {
      $(this)
        .parent()
        .toggleClass("active")
        .parent()
        .find(".box-content,.sidebarFilter,.list-group")
        .slideToggle("slow");
    });
  } else {
    $("#column-left").insertBefore("#content");
    $("#column-right").insertAfter("#content");
    $(".common-home #column-left,.common-home #column-right").insertBefore(
      "#content-top"
    );
    $("#column-left .title-wrapper,#column-right .title-wrapper")
      .parent()
      .find(".box-content,.sidebarFilter,.list-group")
      .removeAttr("style");
    $("#column-left .title-wrapper,#column-right .title-wrapper").removeClass(
      "active"
    );
    $("#column-left .title-wrapper,#column-right .title-wrapper").removeClass(
      "toggle"
    );
    $(
      "#column-left .title-wrapper .mobile_togglemenu,#column-right .title-wrapper .mobile_togglemenu"
    ).remove();
  }
}
$(document).ready(function () {
  mobileToggleColumn();
});
$(window).resize(function () {
  mobileToggleColumn();
});

function setYiHomeCarousel() {
  $(
    ".container .product-carousel, .banners-slider-carousel .product-carousel"
  ).each(function () {
    var objectID = $(this).attr("id");
    var yhc = $("#" + objectID);
    var yhcp = $(this).parent();
    yhc.owlCarousel({
      items: 2,
      responsive: {
        640: {
          items: 3
        },
        979: {
          items: 4
        },
        1300: {
          items: 1
        }
      },
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed: 3000,
      autoplayTimeout: 8000,
      dots: false,
      nav: false,
      loop: true,
      smartSpeed: 500
    });
    yhcp
      .children(".customNavigation")
      .children(".next")
      .click(function () {
        yhc.trigger("next.owl.carousel");
      });
    yhcp
      .children(".customNavigation")
      .children(".prev")
      .click(function () {
        yhc.trigger("prev.owl.carousel");
      });
  });

  $(
    ".container .product-carousel-f, .banners-slider-carousel .product-carousel-f"
  ).each(function () {
    var objectID = $(this).attr("id");
    var yhc = $("#" + objectID);
    var yhcp = $(this).parent();
    yhc.owlCarousel({
      items: 2,
      responsive: {
        640: {
          items: 3
        },
        979: {
          items: 4
        },
        800: {
          items: 4
        },
        1200: {
          items: 6
        }
      },
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed: 3000,
      autoplayTimeout: 8000,
      dots: false,
      nav: false,
      loop: true,
      smartSpeed: 500
    });
    yhcp
      .children(".customNavigation")
      .children(".next")
      .click(function () {
        yhc.trigger("next.owl.carousel");
      });
    yhcp
      .children(".customNavigation")
      .children(".prev")
      .click(function () {
        yhc.trigger("prev.owl.carousel");
      });
  });

  $(
    ".container .product-carousel-c, .banners-slider-carousel .product-carousel-c"
  ).each(function () {
    var objectID = $(this).attr("id");
    var yhc = $("#" + objectID);
    var yhcp = $(this).parent();
    yhc.owlCarousel({
      margin: 80,
      items: 6,
      items: 6,
      responsive: {
        0: {
          items: 2,
          margin: 20
        },
        800: {
          items: 5,
          margin: 30
        },
        1200: {
          items: 6
        }
      },
      autoplay: true,
      autoplayHoverPause: false,
      autoplaySpeed: 2000,
      autoplayTimeout: 2000,
      dots: false,
      nav: false,
      loop: true,
      smartSpeed: 500
    });
    yhcp
      .children(".customNavigation")
      .children(".next")
      .click(function () {
        yhc.trigger("next.owl.carousel");
      });
    yhcp
      .children(".customNavigation")
      .children(".prev")
      .click(function () {
        yhc.trigger("prev.owl.carousel");
      });
  });
}

$(document).ready(function () {
  setYiHomeCarousel();
});

function productListAutoSet() {
  $("#content .productbox-grid").each(function () {
    var objectID = $(this).attr("id");
    if (objectID.length > 0) {
      if (widthClassOptions[objectID.replace("-grid", "")])
        var myDefClass = widthClassOptions[objectID.replace("-grid", "")];
    } else {
      var myDefClass = "grid_default_width";
    }
    $(this).smartColumnsRows({
      defWidthClss: myDefClass,
      subElement: ".product-items",
      subClass: "product-block"
    });
  });
}
$(window).resize(function () {
  productListAutoSet();
});

function HoverWatcher(selector) {
  this.hovering = false;
  var self = this;

  this.isHoveringOver = function () {
    return self.hovering;
  };

  $(selector).hover(
    function () {
      self.hovering = true;
    },
    function () {
      self.hovering = false;
    }
  );
}

$(document).ready(function () {
  LangCurDropDown("#currency", ".currency_div");
  LangCurDropDown("#language", ".language_div");

  $(".nav-responsive").click(function () {
    $(".responsive-menu .nav.navbar-nav").slideToggle();
    $(".nav-responsive div").toggleClass("active");
  });

  $(".treeview-list").treeview({
    animated: "slow",
    collapsed: true,
    unique: true
  });
  $(".treeview-list a.active")
    .parent()
    .removeClass("expandable");
  $(".treeview-list a.active")
    .parent()
    .addClass("collapsable");
  $(".treeview-list .collapsable ul").css("display", "block");
});

$(document).ready(function () {
  $(".tm_headerlinks_inner").click(function () {
    $(".header_links").toggle("slow");
  });
});

/*For Grid and List View Buttons*/
function gridlistactive() {
  $(".btn-list-grid button").on("click", function () {
    if ($(this).hasClass("grid")) {
      $(".btn-list-grid button").addClass("active");
      $(".btn-list-grid button.list").removeClass("active");
    } else if ($(this).hasClass("list")) {
      $(".btn-list-grid button").addClass("active");
      $(".btn-list-grid button.grid").removeClass("active");
    }
  });
}
$(window).resize(function () {
  gridlistactive();
});

$(document).ready(function () {
  $("body").append("<div class='top-button-div'><a class='top_button' title='伊本家居' href='#'>返回頂部</a></div>");

  if ($(this).scrollTop() > 70) {
    $(".top_button").fadeIn();
  } else {
    $(".top_button").hide();
  }

  function onScroll() {
    if ($(this).scrollTop() > 70) {
      $(".top_button").fadeIn();
    } else {
      $(".top_button").fadeOut();
    }
  }

  $(window).on('scroll', onScroll);

  $(function () {
    // scroll body to 0px on click
    $(".top_button").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  });
});

function blogCrop() {
  if ($(window).width() > 979) {
    $(".extension-theme_blog-home .image").each(function () {
      var that = $(this);
      var url = that.find("img").attr("src");
      that.css({
        "background-image": 'url("' + url + '")'
      });
    });
  }
}
jQuery(window).resize(function () {
  blogCrop();
});

function blogSlider() {
  var psblog = jQuery("#blog-carousel");
  psblog.owlCarousel({
    items: 1,
    autoPlay: true,
    dots: true,
    nav: false,
    loop: true,
    smartSpeed: 500,
    rewindSpeed: 1000
  });
}

jQuery(window).resize(function () {
  blogSlider();
});

function testimonialSlider() {
  var psttestimonial = $("#psttestimonial-carousel");
  psttestimonial.owlCarousel({
    items: 1,
    smartSpeed: 800,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplay: true,
    dots: false,
    nav: false,
    loop: true
  });
}
jQuery(window).resize(function () {
  testimonialSlider();
});

function responsivecolumn() {
  if ($(document).width() >= 980) {
    $(window).bind("scroll", function () {
      var scrollVar = $(window).scrollTop();
      if (scrollVar > 55) {
        $(".nav-full-wrapper").addClass("fixed");
        $(window).scrollTop(scrollVar);
      } else {
        $(".nav-full-wrapper").removeClass("fixed");
        $(window).scrollTop(scrollVar);
      }
    });
  } else {
    $(".header-center-content").removeClass("fixed");
  }

  if ($(document).width() <= 979) {
    $(window).bind("scroll", function () {
      var scrollVar = $(window).scrollTop();
      if ($(window).scrollTop() > 55) {
        $(".header-left").addClass("fixed");
        $(window).scrollTop(scrollVar);
      } else {
        $(".header-left").removeClass("fixed");
        $(window).scrollTop(scrollVar);
      }
    });
  }
}

jQuery(document).ready(function () {
  leftright();
  productListAutoSet();
  gridlistactive();
  blogCrop();
  blogSlider();
  testimonialSlider();
  responsivecolumn();
});

$(window).resize(function () {
  responsivecolumn();
});