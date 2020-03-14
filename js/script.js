var link = document.querySelector(".contacts-info__button");

var popup = document.querySelector(".modal-feedback");

var close = document.querySelector(".feedback-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
