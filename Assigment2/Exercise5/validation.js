document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    // Age check
    const age = today.getFullYear() - birthdate.getFullYear();
    if (age < 18) {
        alert('You must be at least 18 years old to register.');
        event.preventDefault();
    }

    // Code check
    if (password !== confirmPassword) {
        alert('The codes do not match.');
        event.preventDefault();
    }

    // Email check
    const email = document.getElementById('email');
    if (!email.checkValidity()) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

