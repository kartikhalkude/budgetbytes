// Predefined usernames and passwords
const users = [
    { username: 'ayush', password: '123' },
    { username: 'kartik', password: '456' },
    { username: 'anni', password: '123' },
    { username: 'appa', password: '456' },
    { username: 'niggesh', password: '911' }
];

// Login form submit event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values from the form
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('pass').value;

    // Check if the input username and password match any of the predefined users
    const user = users.find(u => u.username === inputUsername && u.password === inputPassword);

    // Get the message container
    const loginMessage = document.createElement('p');
    
    if (user) {
        // Redirect to new.html if login is successful
        window.location.href = "new.html"; 
    } else {
        // Display error message if username or password is incorrect
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = "red"; // Error message color
        // Append the login message after the form
        document.querySelector('form').after(loginMessage);

        // Hide the error message after 3 seconds
        setTimeout(() => {
            loginMessage.style.display = "none";
        }, 3000); // 3000ms = 3 seconds
    }
});
