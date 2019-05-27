   var swiper = new Swiper('#js-inner_slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	    pagination: {
        el: '.swiper-pagination',
      },
    });
 $(".variables-nav__item").click(function() {
    $(this).toggleClass("active");
    $(this).next(".table-bordered").slideToggle("fast");
  });