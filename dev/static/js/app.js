$(document).ready(() => {
  $.fancybox.defaults.hideOnOverlayClick = true;
  $.fancybox.defaults.enableEscapeButton = true;
  $.fancybox.defaults.buttons = ["zoom", "fullScreen", "download", "close"];
  $.fancybox.defaults.afterShow = function (instance, current) {
    instance.scaleToFit();
  };

  new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    autoHeight: true,
  });

  $("[data-tel-input]").inputmask("+7 (999) 99 99-99");

  $(".symptom").each(function (index) {
    $(this).on("click", () => {
      $(".active-symptom").removeClass("active-symptom");
      $(this).addClass("active-symptom");
      $(".symptom__perfomance")[index].classList.add("active-symptom");
    });
  });
});
