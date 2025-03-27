document.addEventListener("DOMContentLoaded", () => {
  const tabsElement = document.querySelector("[data-tabs]");
  if (tabsElement) {
    new Tabs(tabsElement, {});
  }
});
