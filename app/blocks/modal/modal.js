document.addEventListener("DOMContentLoaded", () => {
  new Modal();

  const form = document.querySelector("[data-form='callback']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.classList.contains("invalid")) {
      showThanks(form);
    }
  });
});
