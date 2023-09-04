const btnShowModal = document.querySelector(".btn-show"),
  modal = document.querySelector(".modal"),
  icCLose = document.querySelector(".ic_close"),
  btnClose = document.querySelector(".btn-close");
overlay = document.querySelector(".overlay");

btnShowModal.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
});

icCLose.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

btnClose.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
