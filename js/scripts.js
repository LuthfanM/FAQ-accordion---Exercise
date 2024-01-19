document.addEventListener("DOMContentLoaded", () => {
  // Select all the .title elements within .card_content
  const titles = document.querySelectorAll(".card_content .title");

  // Add a click event listener to each title
  titles.forEach((title) => {
    title.addEventListener("click", () => {
      document.querySelectorAll(".card_content .hidden").forEach((hidden) => {
        hidden.classList.remove("active");
      });
      document.querySelectorAll(".card_content .icon").forEach((icon) => {
        icon.classList.remove("active");
      });

      const icon = title.querySelector(".icon");

      const content = title.nextElementSibling;
      content.classList.toggle("active");

      icon.classList.toggle("active");
    });
  });
});
