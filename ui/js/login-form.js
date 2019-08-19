var loginButton = document.querySelector(".login-button");
var closeButton = document.querySelector(".close-button");
var loginModal = document.querySelector(".login-modal");
var loginModalContent = document.querySelector(".login-modal-content");
var body = document.querySelector("body");

function toggleModal() {
    // Display or hide the Login modal.
    loginModal.classList.toggle("show-modal");

    // Apply animation to the login form.
    loginModalContent.classList.toggle("show-login-modal-content");

    // Toggle scrollability of the modal background.
    body.classList.toggle("fixed");
}

loginButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", function(e) {
    if (e.target === loginModal) {
        toggleModal();
    }
});
