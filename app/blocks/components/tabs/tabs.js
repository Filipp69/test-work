document.addEventListener("DOMContentLoaded", () => {
  const tabsElements = document.querySelectorAll("[data-tabs]");

  tabsElements.forEach(tabsElement => {
    if (tabsElement) {
      new Tabs(tabsElement, {});
    }
  });
});
