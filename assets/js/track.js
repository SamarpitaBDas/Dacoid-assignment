function switchPage() {
    var currentPath = window.location.pathname;

    if (currentPath.includes('track.html')) {
        window.location.href = 'get_burn.html';
    } else if (currentPath.includes('get_burn.html')) {
        window.location.href = 'sign_in.html';
    }
}

document.getElementById('switchPageButton').addEventListener('click', switchPage);


// Get form elements
const form = document.getElementById('signInForm');
const errorMessage = document.getElementById('errorMessage');

// Form submission event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user input
    const email = form.email.value;
    const password = form.password.value;

    // Validate user input (basic example, replace with actual validation logic)
    if(email === 'test@example.com' && password === 'password') {
        // Redirect to the dashboard page (or another page) upon successful sign-in
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        errorMessage.classList.remove('hidden');
    }
});
function createAccountButton() {
    window.location.href = 'goals.html';
}
function signInButton() {
    window.location.href = 'goals.html';
}
function confirm() {
    window.location.href = 'home.html';
}





