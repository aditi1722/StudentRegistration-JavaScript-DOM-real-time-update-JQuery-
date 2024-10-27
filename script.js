document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!username || !email || !phone || !password || !confirmPassword) {
        alert('All fields must be filled out.');
        return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits long and numeric.');
        return;
    }

    if (password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password)) {
        alert('Password must be at least 7 characters long, contain at least one capital letter, one digit, and one special character (&, $, #, @).');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return;
    }

    // Add student to the table
    const table = document.getElementById('studentTable');
    const row = table.insertRow();
    row.insertCell(0).innerText = username;
    row.insertCell(1).innerText = email;
    row.insertCell(2).innerText = phone;

    // Reset the form
    document.getElementById('registrationForm').reset();
});

// Set background image using jQuery
$('.container').css('background-image', 'url("new-background.jpg")');

// Access form data using jQuery
$('#registrationForm').on('submit', function() {
    var formData = $(this).serializeArray();
    console.log(formData);
});
