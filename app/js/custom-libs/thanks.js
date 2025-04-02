function showThanks(form) {
  const formHolder = form.closest(`[data-form]`);
  if (formHolder) {
    const formBody = formHolder.querySelector("[data-form-body]");
    const formThanks = formHolder.querySelector("[data-form-thanks]");

    if (formBody) formBody.style.display = "none";
    if (formThanks) formThanks.style.display = "flex";
  }
}
