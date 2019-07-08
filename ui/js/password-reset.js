var passwordResetButton = document.getElementById("reset-password");
passwordResetButton.addEventListener("click", notifyUser);

function notifyUser() {
  var message = document.querySelector(".password-reset-message");
  var dialog = document.querySelector(".password-reset-dialog");
  toggleClasses(message, dialog);
  passwordResetButton.disabled = true;
  setTimeout(() => {
    toggleClasses(message, dialog);
    passwordResetButton.disabled = false;
  }, 3500);
}

function toggleClasses(message, dialog) {
  message.classList.toggle("show-reset-message");
  dialog.classList.toggle("show-reset-dialog");
}
