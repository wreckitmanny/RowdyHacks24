// Select the car, flash overlay, and button elements
const car = document.querySelector(".delorean");
const flashOverlay = document.getElementById("flash");
const startAdventureButton = document.getElementById("startAdventure");

// Function to start the car animation
function startCarAnimation() {
    // Add the animation to the car
    car.style.animation = "driveAcross 3s linear forwards";

    // Listen for the end of the car's animation to trigger the flash
    car.addEventListener("animationend", triggerFlash);
}

// Function to trigger the flash effect
function triggerFlash() {
    flashOverlay.classList.add("flash"); // Start flash animation

    // Optional: Remove the flash effect after it completes to reset
    setTimeout(() => {
        flashOverlay.classList.remove("flash");
    }, 1000);
}

// Trigger the car animation and flash on button click
startAdventureButton.addEventListener("click", startCarAnimation);