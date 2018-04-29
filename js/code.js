  var link = document.querySelector(".contacts-button");
  var popup = document.querySelector(".write-us");
  var close = document.querySelector(".button-x");
  var form = document.querySelector("form");
  var yourName = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var letter = popup.querySelector("[name=letter]");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("write-us-show");
    yourName.focus();
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-show");
    popup.classList.remove("write-us-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!yourName.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("write-us-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("write-us-error");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

      if (popup.classList.contains("write-us-show")) {
        evt.preventDefault();
        popup.classList.remove("write-us-show");
        popup.classList.remove("write-us-error");
      }
    }
  });
