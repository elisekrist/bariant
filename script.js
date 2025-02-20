document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    if (event.target.matches(".window__close-button")) {
      const parentDiv = event.target.closest(".window");
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  });
});
