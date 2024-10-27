// Select the car, flash overlay, and button elements
const car = document.querySelector(".delorean");
const flashOverlay = document.getElementById("flash");
const startAdventureButton = document.getElementById("startAdventure");

// Function to trigger the flash effect
function triggerFlash() {
    flashOverlay.classList.add("flash"); // Start flash animation
}

// Function to redirect on button click
function redirectToNextPage() {
    window.location.href = "nextpage.html"; // Replace with the target URL
}

// Trigger the flash when the car animation ends
car.addEventListener("animationend", triggerFlash);

// Redirect only when the button is clicked
startAdventureButton.addEventListener("click", redirectToNextPage);