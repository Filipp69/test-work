document.addEventListener("DOMContentLoaded", function () {
  let phones = document.querySelectorAll("[data-custom-mask]");
  if(phones) {
      phones.forEach((element) => {
        let phoneMask = new customInputMask(element, {})
      });
  }

  const messages = {
      code: "Неверный код",
  }

  let validModalCodeForm = new formValidator("[data-validate-modal-code]", {
      customErrorMessageData: messages,
      needErrorMessage: true,
  });

  let validModalForm = new formValidator("[data-validate-modal]", {});
  let validForm = new formValidator("[data-validate-form]", {});
});
