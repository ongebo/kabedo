var currentModal;
var currentModalContent;

// Show or hide a popup modal for editing a component (e.g. bio, hobbies, ...)
// of the user profile.
function toggleModal() {
    currentModal.classList.toggle("show");
    currentModalContent.classList.toggle("show-popup-content");
}

// Handle clicks on each edit icon on the page.
var editButtons = document.querySelectorAll(".edit-button");
editButtons.forEach(function(editButton) {
    editButton.addEventListener("click", function(event) {
        var clickedEditIcon = event.target;
        if (clickedEditIcon.classList.contains("bio-editor")) {
            currentModal = document.getElementById("bio");
            currentModalContent = document.querySelector(
                "#bio > .popup-content"
            );
        } else if (clickedEditIcon.classList.contains("hobbies-editor")) {
            currentModal = document.getElementById("hobbies");
            currentModalContent = document.querySelector(
                "#hobbies > .popup-content"
            );
        } else if (clickedEditIcon.classList.contains("birthday-editor")) {
            currentModal = document.getElementById("birthday");
            currentModalContent = document.querySelector(
                "#birthday > .popup-content"
            );
        } else if (clickedEditIcon.classList.contains("schools-editor")) {
            currentModal = document.getElementById("schools");
            currentModalContent = document.querySelector(
                "#schools > .popup-content"
            );
        } else {
            currentModal = document.getElementById("marital-status");
            currentModalContent = document.querySelector(
                "#marital-status > .popup-content"
            );
        }
        toggleModal();
    });
});

var modalButtons = document.querySelectorAll(".popup-content > button");

// Hide a modal if an Update or Cancel button is clicked
modalButtons.forEach(function(modalButton) {
    modalButton.addEventListener("click", function() {
        toggleModal();
    });
});

// Add a user-entered hobby to his/her list of hobbies.
var addHobbyButton = document.querySelector(".hobbies-add button");
var addHobbyInput = document.querySelector(".hobbies-add input");
addChoiceToList(addHobbyButton, addHobbyInput, ".hobbies-list");

// Add a user-entered school to his/her list of schools.
var addSchoolButton = document.querySelector(".schools-add button");
var addSchoolInput = document.querySelector(".schools-add input");
addChoiceToList(addSchoolButton, addSchoolInput, ".schools-list");

function addChoiceToList(addButton, inputElement, listClassName) {
    addButton.addEventListener("click", function() {
        var userInput = inputElement.value;
        if (userInput) {
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            checkbox.type = "checkbox";
            checkbox.id = userInput;
            checkbox.checked = true;
            label.for = userInput;
            label.innerText = userInput;

            var schools = document.querySelector(listClassName);
            schools.appendChild(checkbox);
            schools.appendChild(label);
            inputElement.value = "";
        }
    });
}

// Validate a user's birthday input (dd-mm-yyyy), draw a red border
// around the input if it doesn't match expected pattern when it loses
// input focus.
var birthdayInput = document.querySelector("#birthday input");
birthdayInput.addEventListener("blur", function(event) {
    var input = event.target;
    var datePattern = /^(((0[1-9])|(1[0-9])|(2[0-9])|([1-9])|(3[0,1]))-(([1-9])|(0[1-9])|(1[0,1,2])|(1-9))-(((19)|(20))[0-9][0-9]))$/;
    if (!datePattern.test(input.value)) {
        input.classList.add("error");
    } else {
        input.classList.remove("error");
    }
});
