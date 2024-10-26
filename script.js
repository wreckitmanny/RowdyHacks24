// Select the car and flash overlay elements
const car = document.querySelector(".delorean");
const flashOverlay = document.getElementById("flash");

// Function to trigger flash and redirect
function triggerFlashAndRedirect() {
    flashOverlay.classList.add("flash"); // Start flash animation

    // Wait for the flash animation to complete before redirecting
    setTimeout(() => {
        window.location.href = "nextpage.html"; // Replace with the target URL
    }, 1000); // Delay matches the 1s duration of the flash animation
}

// Listen for the end of the car's driveAcross animation
car.addEventListener("animationend", triggerFlashAndRedirect);