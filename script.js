const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const questionSection = document.getElementById("question-section");
const successSection = document.getElementById("success-section");

if (noButton && yesButton) {
    // The Runaway Button Logic
    noButton.addEventListener("mouseover", () => {
        // Calculate random position within screen bounds
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // The "Yes" Click Logic
    yesButton.addEventListener("click", () => {
        questionSection.classList.add("hidden");
        successSection.classList.remove("hidden");
        
        // Bonus: reset "No" button position so it doesn't float over the success message
        noButton.style.display = "none";
    });
}