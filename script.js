// Select the Start Adventure button and flash overlay element
const startAdventureButton = document.getElementById("startAdventure");
const flashOverlay = document.getElementById("flash");

// Function to trigger flash and redirect
function triggerFlashAndRedirect() {
    flashOverlay.classList.add("flash"); // Start flash animation

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
        window.location.href = "nextpage.html"; // Replace "nextpage.html" with the target URL
    }, 1000); // Delay matches the 1s duration of the flash animation
}

// Add click event listener to the Start Adventure button
startAdventureButton.addEventListener("click", triggerFlashAndRedirect);