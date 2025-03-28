function showThanks(form) {
  const formHolder = form.closest(`[data-form]`);
  if (formHolder) {
    formHolder.querySelector("[data-form-body]").style.display = "none";
    formHolder.querySelector("[data-form-thanks]").style.display = "flex";
  }
}
