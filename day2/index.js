const btn = document.querySelector(".search-btn");
const search = document.querySelector(".search");

btn.addEventListener("click", function () {
  search.classList.toggle("open");

  this.previousElementSibling.focus();
});
