// List of reasons to stay alive
const reasons = [
    "You have the potential to make a positive impact on the world.",
    "There are people who love and care about you.",
    "You have the opportunity to learn and grow.",
    "You can make a difference in someone else's life.",
    "You have the ability to overcome challenges.",
    "You have the power to change your life for the better.",
    "You are unique and special.",
    "You have the ability to create something beautiful.",
    "You have the power to make a difference in your community.",
    "You have the opportunity to experience new things and make memories."
];

// Function to get random reason
function getRandomReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    return reasons[randomIndex];
}

// Display the random reason with delay and typing effect
const reasonElement = document.getElementById("reason");

// Function to type out the reason
function typeReason(reason) {
    let index = 0;
    const interval = setInterval(() => {
        reasonElement.innerHTML += reason.charAt(index);
        index++;

        if (index === reason.length) {
            clearInterval(interval);
        }
    }, 50);
}

// Function to add a delay before displaying the reason
function displayReasonWithDelay() {
    setTimeout(() => {
        reasonElement.innerHTML = "";
        reasonElement.classList.add("typing");
        const reason = getRandomReason();
        typeReason(reason);
    }, 1000);
}

// Display the reason on page load
displayReasonWithDelay();
