// JavaScript Document

// Start Adventure function that triggers the Groq API call
function startAdventure() {
    const name = document.getElementById("userName").value;
    const storyDisplay = document.getElementById("story");

    if (!name) {
        storyDisplay.textContent = "Please enter your name to start the adventure!";
        return;
    }

    // Placeholder for API call to Groq
    fetch(`https://api.groq.com/generateStory?name=${encodeURIComponent(name)}`)
        .then(response => response.json())
        .then(data => {
            // Display the generated story
            storyDisplay.textContent = data.story;
        })
        .catch(error => {
            console.error("Error fetching story:", error);
            storyDisplay.textContent = "Oops! Something went wrong. Try again later.";
        });
}
