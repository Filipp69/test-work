class Accordion {
  constructor(parent) {
    this.accordion = parent;
    this.button = this.accordion.querySelector("[data-accordion-toggle]");
    this.content = this.accordion.querySelector("[data-accordion-content]");
    this.group = this.accordion.closest("[data-accordions-group]");

    this.init();
  }

  init() {
    this.button.addEventListener("click", () => {
      this.toggleItem();
    });
  }

  toggleItem() {
    this.toggleGroup();
    const isActive = this.accordion.classList.contains("active");

    if (isActive) {
      this.toggle(this.accordion, this.content, "remove");
    } else {
      this.toggle(this.accordion, this.content, "add");
    }
  }

  toggleGroup() {
    if (this.group) {
      const prev = this.group.querySelector(".accordion.active");
      if (prev && prev !== this.accordion) {
        const prevContent = prev.querySelector("[data-accordion-content]");
        this.toggle(prev, prevContent, "remove");
      }
    }
  }

  toggle(button, content, status) {
    button.classList[status]("active");

    if (status === "add") {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  }
}
