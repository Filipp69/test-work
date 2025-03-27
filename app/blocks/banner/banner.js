document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".banner__list li");

  listItems.forEach(item => {
    item.addEventListener("click", () => {
      listItems.forEach(el => el.classList.remove("active")); // Убираем active у всех
      item.classList.add("active"); // Добавляем active только текущему
    });
  });
});
