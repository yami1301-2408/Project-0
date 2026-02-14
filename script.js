const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const questionSection = document.getElementById("question-section");
const successSection = document.getElementById("success-section");

// Make the "No" button move away
noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Show success message
yesButton.addEventListener("click", () => {
    questionSection.classList.add("hidden");
    successSection.classList.remove("hidden");
});