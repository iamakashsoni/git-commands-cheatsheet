/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.6
Assigned to: ThemeForest
-------------------------------------------------------------------*/
(function ($) {
  "use strict";

  // Preloader Js
  jQuery(window).on("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow");
  });

  // ready function
  jQuery(document).ready(function ($) {
    var $this = $(window);

    //bg window height Js
    var window_height = window.innerHeight;
    $(".prt_home_wrapper").css("height", window_height);

    //Portfolio Load More
    $(".prt_loadmore").slice(0, 3).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".prt_loadmore:hidden").slice(0, 5).slideDown();
      if ($(".prt_loadmore:hidden").length == 0) {
        $("#load").fadeOut("slow");
      }
    });

    // for counter
    $(".timer").appear(function () {
      $(this).countTo();
    });

    // About Page Profile Slider Js
    $(".prt_profile_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Skills Charts
    // $('.prt_skills_wrapper').appear(function() {
    // 	var circle1 = Circles.create({
    // 		id: 'circles-1',
    // 		value: 90,
    // 		radius: 100,
    // 		number: 90,
    // 		text: '90%',
    // 		width: 8,
    // 		colors: ["#202020", "#00c8ff"],
    // 		duration: 900
    // 	});
    // 	var circle2 = Circles.create({
    // 		id: 'circles-2',
    // 		value: 80,
    // 		radius: 100,
    // 		number: 80,
    // 		text: '80%',
    // 		width: 8,
    // 		colors: ["#202020", "#ff8511"],
    // 		duration: 900
    // 	});
    // 	var circle3 = Circles.create({
    // 		id: 'circles-3',
    // 		value: 75,
    // 		radius: 100,
    // 		number: 75,
    // 		text: '75%',
    // 		width: 8,
    // 		colors: ["#202020", "#f26525"],
    // 		duration: 900
    // 	});
    // 	var circle4 = Circles.create({
    // 		id: 'circles-4',
    // 		value: 70,
    // 		radius: 100,
    // 		number: 70,
    // 		text: '70%',
    // 		width: 8,
    // 		colors: ["#202020", "#1d8bbe"],
    // 		duration: 900
    // 	});
    // });

    // Service Page Client Slider Js
    $(".prt_client_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    // Portfolio popup Js
    $(".popup-gallery").magnificPopup({
      delegate: "a.imageopen",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small></small>";
        },
      },
    });

    // Portfolio video Popup js
    $("a.popup-youtube").magnificPopup({
      disableOn: 0,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });

    // Service Page Image Slides Js
    $("div.prt_img_click").on("click", function () {
      // Always remove active class from all images first
      $("div.prt_services_slider_imgs img").removeClass("active");

      // Find the target image based on the clicked heading's ID
      var target = $("div.prt_services_slider_imgs .img_" + $(this).attr("id"));

      // If the image exists, remove it and prepend a fresh copy of it to reset
      if (target.length) {
        var targetImg = target[0].outerHTML;
        target.remove();
        $("div.prt_services_slider_imgs").prepend(targetImg);
        $("div.prt_services_slider_imgs img:first").addClass("active");
      }

      // Remove active class from previously clicked headings
      $("div.prt_services_slider_box .prt_img_click").removeClass("active");

      // Mark the clicked heading as active
      $(this).addClass("active");
    });

    // Open Close main Section Js
    var AplCss;
    var targetSection;
    var tar;
    var timing = 500;
    $("div.prt_menu_wrapper a").on("click", function (e) {
      e.preventDefault();
      tar = $(this).attr("href").split("#")[1];
      targetSection = $(".prt_" + tar + "_wrapper");
      if (tar == "about") {
        AplCss = { top: 0 };
      } else if (tar == "contact") {
        AplCss = { left: 0 };
      } else if (tar == "services") {
        AplCss = { bottom: 0, top: 0 };
      } else if (tar == "portfolio") {
        AplCss = { right: 0 };
      }
      targetSection.css("display", "block");
      targetSection.animate(AplCss, timing);
    });
    $("img.prt_close").on("click", function () {
      hide_section();
    });

    $("img#prt_close_tab").on("click", function () {
      hide_section();
    });
    function hide_section() {
      if (tar == "about") {
        AplCss = { display: "none", top: "-100%" };
      } else if (tar == "contact") {
        AplCss = { display: "none", left: "100%" };
      } else if (tar == "services") {
        AplCss = { display: "none", bottom: "0", top: "100%" };
      } else if (tar == "portfolio") {
        AplCss = { display: "none", right: "100%" };
      }
      setTimeout(function () {
        targetSection.css("display", "none");
      }, timing);
      targetSection.animate(AplCss, timing);
    }

    // Contact Form Submission
    function checkRequire(formId, targetResp) {
      targetResp.html("");
      var email =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      var url =
        /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
      var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
      var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
      var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
      var google_plus =
        /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
      var check = 0;
      $("#er_msg").remove();
      var target = typeof formId == "object" ? $(formId) : $("#" + formId);
      target.find("input , textarea , select").each(function () {
        if ($(this).hasClass("require")) {
          if ($(this).val().trim() == "") {
            check = 1;
            $(this).focus();
            targetResp.html("You missed out some fields.");
            $(this).addClass("error");
            return false;
          } else {
            $(this).removeClass("error");
          }
        }
        if ($(this).val().trim() != "") {
          var valid = $(this).attr("data-valid");
          if (typeof valid != "undefined") {
            if (!eval(valid).test($(this).val().trim())) {
              $(this).addClass("error");
              $(this).focus();
              check = 1;
              targetResp.html($(this).attr("data-error"));
              return false;
            } else {
              $(this).removeClass("error");
            }
          }
        }
      });
      return check;
    }
    $(".submitForm").on("click", function () {
      var _this = $(this);
      var targetForm = _this.closest("form");
      var errroTarget = targetForm.find(".response");
      var check = checkRequire(targetForm, errroTarget);
      if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append("form_type", _this.attr("form-type"));
        $.ajax({
          method: "post",
          url: "ajax.php",
          data: formDetail,
          cache: false,
          contentType: false,
          processData: false,
        }).done(function (resp) {
          if (resp == 1) {
            targetForm.find("input").val("");
            targetForm.find("textarea").val("");
            errroTarget.html(
              '<p style="color:green;">Mail has been sent successfully.</p>'
            );
          } else {
            errroTarget.html(
              '<p style="color:red;">Something went wrong please try again latter.</p>'
            );
          }
        });
      }
    });
  });
})();
//Owl carousel Portfolio
$(document).ready(function () {
  // Placeholder data for each category
  const carouselData = {
    "website-designs": [
      {
        image: "./images/content/Desktop_01.jpg",
        url: "https://amulette.co.uk/",
      },
      {
        image: "./images/content/Desktop_02.jpg",
        url: "https://bailey-walsh.com/",
      },
      {
        image: "./images/content/Desktop_03.jpg",
        url: "https://desire-bathrooms.co.uk/",
      },
      {
        image: "./images/content/Desktop_04.jpg",
        url: "https://infilinktechnologies.com/",
      },
      {
        image: "./images/content/Desktop_05.jpg",
        url: "https://emergyfitness.co.uk/",
      },
      {
        image: "./images/content/Desktop_06.jpg",
        url: "https://www.bordonanglingcentre.co.uk/",
      },
      {
        image: "./images/content/Desktop_07.jpg",
        url: "https://mayfairhousing.com/",
      },
      {
        image: "./images/content/Desktop_08.jpg",
        url: "https://ukgamingsolutions.co.uk/",
      },
      {
        image: "./images/content/Desktop_09.jpg",
        url: "https://buzzglobal.biz/",
      },
      {
        image: "./images/content/Desktop_10.jpg",
        url: "https://fastarc.co.uk/",
      },
      {
        image: "./images/content/Desktop_11.jpg",
        url: "https://www.windsorcourtproperties.co.uk/",
      },
      {
        image: "./images/content/Desktop_12.jpg",
        url: "https://www.ibentoglobal.com/",
      },
      {
        image: "./images/content/Desktop_13.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Desktop_14.jpg",
        url: "https://www.infozzle.com/",
      },
      {
        image: "./images/content/Desktop_15.jpg",
        url: "https://www.synergix-int.com/",
      },
      {
        image: "./images/content/Desktop_16.jpg",
        url: "https://onestopbadges.co.uk/",
      },
      {
        image: "./images/content/Desktop_17.jpg",
        url: "https://www.hdfchealth.com/",
      },
      {
        image: "./images/content/Desktop_18.jpg",
        url: "https://www.ltfs.com/",
      },
      { image: "./images/content/Desktop_19.jpg", url: "https://hfs.in/" },
      {
        image: "./images/content/Desktop_20.jpg",
        url: "https://olioglobaladtech.com/",
      },
      {
        image: "./images/content/Desktop_21.jpg",
        url: "https://www.indiansuperleague.com/",
      },
    ],
    "emailer-designs": [
      { image: "./images/content/Emailer_01.jpg", url: "#" },
      { image: "./images/content/Emailer_02.jpg", url: "#" },
      { image: "./images/content/Emailer_03.jpg", url: "#" },
      { image: "./images/content/Emailer_04.jpg", url: "#" },
      { image: "./images/content/Emailer_05.jpg", url: "#" },
    ],
    "mobile-app-designs": [
      {
        image: "./images/content/Mobile_App_01.jpg",
        url: "https://play.google.com/store/apps/details id=com.londonandpartners.londonguide",
      },
      {
        image: "./images/content/Mobile_App_02.jpg",
        url: "https://play.google.com/store/apps/details?id=com.nsmark.visitdoctor",
      },
      {
        image: "./images/content/Mobile_App_03.jpg",
        url: "https://play.google.com/store/apps/details?id=com.wyh.aditya_birla",
      },
      {
        image: "./images/content/Mobile_App_04.jpg",
        url: "https://play.google.com/store/apps/details?id=com.universalsompo.meta",
      },
      {
        image: "./images/content/Mobile_App_05.jpg",
        url: "https://play.google.com/store/apps/details?id=com.jaslokpatientportal",
      },
      { image: "./images/content/Mobile_App_06.jpg", url: "#" },
      {
        image: "./images/content/Mobile_App_07.jpg",
        url: "https://play.google.com/store/apps/details?id=com.pdhinduja.teleconsultapp",
      },
      { image: "./images/content/Mobile_App_08.jpg", url: "#" },
      {
        image: "./images/content/Mobile_App_09.jpg",
        url: "https://www.themaritimestandard.com/",
      },
    ],
    "website-banners": [
      { image: "./images/content/Web_Banner_01.jpg", url: "#" },
      { image: "./images/content/Web_Banner_02.jpg", url: "#" },
      { image: "./images/content/Web_Banner_03.jpg", url: "#" },
      { image: "./images/content/Web_Banner_04.jpg", url: "#" },
      { image: "./images/content/Web_Banner_05.jpg", url: "#" },
      { image: "./images/content/Web_Banner_06.jpg", url: "#" },
      { image: "./images/content/Web_Banner_07.jpg", url: "#" },
      { image: "./images/content/Web_Banner_08.jpg", url: "#" },
      { image: "./images/content/Web_Banner_09.jpg", url: "#" },
      { image: "./images/content/Web_Banner_10.jpg", url: "#" },
      { image: "./images/content/Web_Banner_11.jpg", url: "#" },
      { image: "./images/content/Web_Banner_12.jpg", url: "#" },
      {
        image: "./images/content/Web_Banner_13.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Web_Banner_14.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Web_Banner_15.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Web_Banner_16.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Web_Banner_17.jpg",
        url: "https://www.gitsfood.com/",
      },
      {
        image: "./images/content/Web_Banner_18.jpg",
        url: "https://www.gitsfood.com/",
      },
      { image: "./images/content/Web_Banner_19.jpg", url: "#" },
      {
        image: "./images/content/Web_Banner_20.jpg",
        url: "https://www.sunteckindia.com/",
      },
      { image: "./images/content/Web_Banner_21.jpg", url: "#" },
      { image: "./images/content/Web_Banner_22.jpg", url: "#" },
      { image: "./images/content/Web_Banner_23.jpg", url: "#" },
      { image: "./images/content/Web_Banner_24.jpg", url: "#" },
      { image: "./images/content/Web_Banner_25.jpg", url: "#" },
      { image: "./images/content/Web_Banner_26.jpg", url: "#" },
      { image: "./images/content/Web_Banner_27.jpg", url: "#" },
      { image: "./images/content/Web_Banner_28.jpg", url: "#" },
    ],
    "dashboard-designs": [
      { image: "./images/content/Dashboard_01.jpg", url: "#" },
      { image: "./images/content/Dashboard_02.jpg", url: "#" },
      { image: "./images/content/Dashboard_03.jpg", url: "#" },
      { image: "./images/content/Dashboard_04.jpg", url: "#" },
      { image: "./images/content/Dashboard_05.jpg", url: "#" },
      { image: "./images/content/Dashboard_06.jpg", url: "#" },
      { image: "./images/content/Dashboard_07.jpg", url: "#" },
      { image: "./images/content/Dashboard_08.jpg", url: "#" },
      { image: "./images/content/Dashboard_09.jpg", url: "#" },
      { image: "./images/content/Dashboard_10.jpg", url: "#" },
      { image: "./images/content/Dashboard_11.jpg", url: "#" },
      { image: "./images/content/Dashboard_12.jpg", url: "#" },
    ],
    "social-designs": [
      { image: "./images/content/Social_Media_01.jpg", url: "#" },
      { image: "./images/content/Social_Media_02.jpg", url: "#" },
      { image: "./images/content/Social_Media_03.jpg", url: "#" },
      { image: "./images/content/Social_Media_04.jpg", url: "#" },
      { image: "./images/content/Social_Media_05.jpg", url: "#" },
      { image: "./images/content/Social_Media_06.jpg", url: "#" },
      { image: "./images/content/Social_Media_07.jpg", url: "#" },
      { image: "./images/content/Social_Media_08.jpg", url: "#" },
      { image: "./images/content/Social_Media_09.jpg", url: "#" },
      { image: "./images/content/Social_Media_10.jpg", url: "#" },
      { image: "./images/content/Social_Media_11.jpg", url: "#" },
      { image: "./images/content/Social_Media_12.jpg", url: "#" },
      { image: "./images/content/Social_Media_13.jpg", url: "#" },
      { image: "./images/content/Social_Media_14.jpg", url: "#" },
      { image: "./images/content/Social_Media_15.jpg", url: "#" },
      { image: "./images/content/Social_Media_16.jpg", url: "#" },
      { image: "./images/content/Social_Media_17.jpg", url: "#" },
      { image: "./images/content/Social_Media_18.jpg", url: "#" },
      { image: "./images/content/Social_Media_19.jpg", url: "#" },
      { image: "./images/content/Social_Media_20.jpg", url: "#" },
      { image: "./images/content/Social_Media_21.jpg", url: "#" },
      { image: "./images/content/Social_Media_22.jpg", url: "#" },
      { image: "./images/content/Social_Media_23.jpg", url: "#" },
      { image: "./images/content/Social_Media_24.jpg", url: "#" },
      { image: "./images/content/Social_Media_25.jpg", url: "#" },
      { image: "./images/content/Social_Media_26.jpg", url: "#" },
      { image: "./images/content/Social_Media_27.jpg", url: "#" },
      { image: "./images/content/Social_Media_28.jpg", url: "#" },
      { image: "./images/content/Social_Media_29.jpg", url: "#" },
      { image: "./images/content/Social_Media_30.jpg", url: "#" },
      { image: "./images/content/Social_Media_31.jpg", url: "#" },
      { image: "./images/content/Social_Media_32.jpg", url: "#" },
      { image: "./images/content/Social_Media_33.jpg", url: "#" },
      { image: "./images/content/Social_Media_34.jpg", url: "#" },
      { image: "./images/content/Social_Media_35.jpg", url: "#" },
      { image: "./images/content/Social_Media_36.jpg", url: "#" },
      { image: "./images/content/Social_Media_37.jpg", url: "#" },
      { image: "./images/content/Social_Media_38.jpg", url: "#" },
      { image: "./images/content/Social_Media_39.jpg", url: "#" },
      { image: "./images/content/Social_Media_40.jpg", url: "#" },
      { image: "./images/content/Social_Media_41.jpg", url: "#" },
      { image: "./images/content/Social_Media_42.jpg", url: "#" },
      { image: "./images/content/Social_Media_43.jpg", url: "#" },
      { image: "./images/content/Social_Media_44.jpg", url: "#" },
    ],
    "brochure-designs": [
      { image: "./images/content/Brochure_01.jpg", url: "#" },
      { image: "./images/content/Brochure_02.jpg", url: "#" },
      { image: "./images/content/Brochure_03.jpg", url: "#" },
      { image: "./images/content/Brochure_04.jpg", url: "#" },
      { image: "./images/content/Brochure_05.jpg", url: "#" },
    ],
    "logo-designs": [
      { image: "./images/content/Logo_01.jpg", url: "#" },
      { image: "./images/content/Logo_02.jpg", url: "#" },
      { image: "./images/content/Logo_03.jpg", url: "#" },
      { image: "./images/content/Logo_04.jpg", url: "#" },
      { image: "./images/content/Logo_05.jpg", url: "#" },
      { image: "./images/content/Logo_06.jpg", url: "#" },
      { image: "./images/content/Logo_07.jpg", url: "#" },
      { image: "./images/content/Logo_08.jpg", url: "#" },
      { image: "./images/content/Logo_09.jpg", url: "#" },
      { image: "./images/content/Logo_10.jpg", url: "#" },
      { image: "./images/content/Logo_11.jpg", url: "#" },
      { image: "./images/content/Logo_12.jpg", url: "#" },
      { image: "./images/content/Logo_13.jpg", url: "#" },
      { image: "./images/content/Logo_14.jpg", url: "#" },
      { image: "./images/content/Logo_15.jpg", url: "#" },
      { image: "./images/content/Logo_16.jpg", url: "#" },
      { image: "./images/content/Logo_17.jpg", url: "#" },
      { image: "./images/content/Logo_18.jpg", url: "#" },
      { image: "./images/content/Logo_19.jpg", url: "#" },
      { image: "./images/content/Logo_20.jpg", url: "#" },
      { image: "./images/content/Logo_21.jpg", url: "#" },
    ],
    "leaflet-designs": [
      { image: "./images/content/Leaflet_01.jpg", url: "#" },
      { image: "./images/content/Leaflet_02.jpg", url: "#" },
      { image: "./images/content/Leaflet_03.jpg", url: "#" },
      { image: "./images/content/Leaflet_04.jpg", url: "#" },
      { image: "./images/content/Leaflet_05.jpg", url: "#" },
      { image: "./images/content/Leaflet_06.jpg", url: "#" },
      { image: "./images/content/Leaflet_07.jpg", url: "#" },
      { image: "./images/content/Leaflet_08.jpg", url: "#" },
      { image: "./images/content/Leaflet_09.jpg", url: "#" },
      { image: "./images/content/Leaflet_10.jpg", url: "#" },
      { image: "./images/content/Leaflet_11.jpg", url: "#" },
      { image: "./images/content/Leaflet_12.jpg", url: "#" },
      { image: "./images/content/Leaflet_13.jpg", url: "#" },
    ],
  };

  // Function to initialize Owl Carousel with provided images
  function initializeCarousel(images) {
    const carousel = $("#carouselContent");
    carousel.empty(); // Clear previous content

    images.forEach((item) => {
      carousel.append(`
				<div class="item">
					<a href="${item.url}" target="_blank">
						<img src="${item.image}" alt="Carousel Image">
					</a>
				</div>
			`);
    });

    // Destroy any existing Owl Carousel instance to prevent duplication
    if (carousel.hasClass("owl-loaded")) {
      carousel.trigger("destroy.owl.carousel");
      carousel.removeClass("owl-loaded");
    }

    // Reinitialize the Owl Carousel with new images
    carousel.owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: ["<", ">"],
    });
  }

  // Event listener for cards
  $(".prt_portfolio_img[data-category='website-designs']").on(
    "click",
    function () {
      const images = carouselData["website-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='emailer-designs']").on(
    "click",
    function () {
      const images = carouselData["emailer-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='mobile-app-designs']").on(
    "click",
    function () {
      const images = carouselData["mobile-app-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='website-banners']").on(
    "click",
    function () {
      const images = carouselData["website-banners"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='dashboard-designs']").on(
    "click",
    function () {
      const images = carouselData["dashboard-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='social-designs']").on(
    "click",
    function () {
      const images = carouselData["social-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='brochure-designs']").on(
    "click",
    function () {
      const images = carouselData["brochure-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='logo-designs']").on(
    "click",
    function () {
      const images = carouselData["logo-designs"];
      initializeCarousel(images);
      openModal();
    }
  );
  $(".prt_portfolio_img[data-category='leaflet-designs']").on(
    "click",
    function () {
      const images = carouselData["leaflet-designs"];
      initializeCarousel(images);
      openModal();
    }
  );

  // Open modal function
  function openModal() {
    $("#carouselModal").css("display", "flex");
  }

  // Close modal function
  function closeModal() {
    $("#carouselModal").css("display", "none");
  }

  // Attach close function to close icon
  $(".close-modal").on("click", closeModal);
});

/* Typing effect */
// document.addEventListener("DOMContentLoaded", function () {
//   const text = "Hello, \nWelcome to \nYonder Melodies!";
//   const target = document.getElementById("typingEffect");

//   if (target) {
//     // Check if the element exists
//     let index = 0;
//     let formattedText = text;

//     function typeWriter() {
//       if (index < formattedText.length) {
//         target.innerHTML += formattedText.charAt(index);
//         index++;

//         setTimeout(typeWriter, 150);
//       }
//     }
//     typeWriter();
//   } else {
//     console.error("Element with id 'typingEffect' not found.");
//   }
// });

// a
document.addEventListener("DOMContentLoaded", function () {
  const particles = [];

  document.addEventListener("mousemove", function (event) {
    for (let i = 0; i < 3; i++) {
      createParticle(event.clientX, event.clientY);
    }
  });

  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Set absolute position but translate for movement
    particle.style.position = "fixed";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.transform = `translate(${x}px, ${y}px)`;

    // Random Color Transitions
    const colors = [
      "#ff0000",
      "#ff7300",
      "#fffa00",
      "#00ff00",
      "#00ffff",
      "#007bff",
      "#8a2be2",
      "#ff1493",
    ];
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    particles.push({
      element: particle,
      life: 100,
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    });

    setTimeout(() => {
      particle.style.transition = "opacity 1s, transform 1s";
      particle.style.opacity = "0";
      particle.style.filter = "blur(4px)";
      setTimeout(() => particle.remove(), 1000);
    }, 500);
  }

  function animateParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.life -= 2;
      p.x += p.vx * 2;
      p.y += p.vy * 2;
      p.element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${
        p.life / 100
      })`;
      p.element.style.opacity = p.life / 100;

      if (p.life <= 0) {
        p.element.remove();
        particles.splice(i, 1);
        i--;
      }
    }
    requestAnimationFrame(animateParticles);
  }

  animateParticles();
});
