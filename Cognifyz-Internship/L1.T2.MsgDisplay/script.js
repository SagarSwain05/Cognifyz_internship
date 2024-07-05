// Get the current hour
let currentHour = new Date().getHours();

// Determine the greeting message
let greeting;
if (currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

// Display the greeting in the alert box
document.getElementById('alert-message').textContent = greeting;
document.getElementById('alert-box').style.display = 'block';

// Add event listener to the close button
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('alert-box').style.display = 'none';
});