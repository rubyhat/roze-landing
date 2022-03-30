// Отправка заявки
$(document).ready(function () {
  const isMobile = window.matchMedia("(max-width: 576px)").matches;
  const formModal = document.querySelector(".modal-wrap");
  const modalButton = formModal.querySelector(".button");

  modalButton.addEventListener("click", () => {
    formModal.classList.add("d-none");
  });

  $(".form").submit(function () {
    let data = $(this).serialize();
    isMobile ? (data += "&device=Phone") : (data += "&device=Computer");
    console.log($(this).serialize());
    console.log(data);
    $.ajax({
      type: "POST",
      url: "telegram.php",
      data: data,
    }).done(function () {
      $(this).find("input").val("");
      $(".form").trigger("reset");
      formModal.classList.remove("d-none");
      console.log(formModal);
    });
    return false;
  });
});

// //Закрыть попап «спасибо»
// $(".js-close-thank-you").click(function () {
//   // по клику на крестик
//   $(".js-overlay-thank-you").fadeOut();
// });

// $(document).mouseup(function (e) {
//   // по клику вне попапа
//   var popup = $(".popup");
//   if (e.target != popup[0] && popup.has(e.target).length === 0) {
//     $(".js-overlay-thank-you").fadeOut();
//   }
// });

// Маска ввода номера телефона (плагин maskedinput)
// $(function ($) {
//   $('[name="phone"]').mask("+7(999) 999-9999");
// });
