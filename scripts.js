// Dark Mode Toggle
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    // Store theme preference in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check user's theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Dynamic Gallery with Modal
const projectImages = document.querySelectorAll('.project img');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');

projectImages.forEach(image => {
    image.addEventListener('click', function() {
        // Show modal with project details
        modal.style.display = 'block';
        // Replace the following line with your specific logic to show project details
        modal.querySelector('.modal-content').textContent = 'Project details here';
    });
});

closeModalButton.addEventListener('click', function() {
    // Close modal when close button is clicked
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    // Close modal when clicking outside of modal content
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Validate form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    if (nameInput.value.trim() === '') {
        displayErrorMessage(nameInput, 'Name is required');
        isValid = false;
    } else {
        removeErrorMessage(nameInput);
    }

    if (emailInput.value.trim() === '') {
        displayErrorMessage(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        displayErrorMessage(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        removeErrorMessage(emailInput);
    }

    if (messageInput.value.trim() === '') {
        displayErrorMessage(messageInput, 'Message is required');
        isValid = false;
    } else {
        removeErrorMessage(messageInput);
    }

    // Submit form if validation passes
    if (isValid) {
        contactForm.submit();
    }
});

function displayErrorMessage(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function removeErrorMessage(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
