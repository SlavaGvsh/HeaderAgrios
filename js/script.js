$(document).ready(function () {
  $(".burger__menu").click(function (event) {
    $(".nav, .burger__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  
//   $(".nav__item-drop").click(function () {
//    $(this).find(".dropdown__list").slideToggle(200);
//  });
// Проверяем ширину экрана
var screenWidth = $(window).width();

// Если ширина экрана меньше 768px (или другого значения для мобильных устройств)
if (screenWidth < 768) {
  // Применяем slideToggle() к элементу
  $('.nav__item-drop').click(function(){
    $(this).find(".dropdown__list").slideToggle(200);
  });
}
});

