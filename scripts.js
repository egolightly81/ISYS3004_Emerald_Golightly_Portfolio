// Dark Mode Toggle
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    // Store theme preference in localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Check user's theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Dynamic Gallery with Modal
const projectImages = [
    'project1_IoT.jpg',
    'project2_AH.jpg',
    'project3_carboncapture.jpg'
];

const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalButton = document.querySelector('.close-modal');

projectImages.forEach((imageUrl, index) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `Project ${index + 1}`;
    image.classList.add('project-image');

    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalContent.textContent = `Details of Project ${index + 1}`;
    });

    document.getElementById('projects').appendChild(image);
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation (Assuming these functions are defined elsewhere in your code)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/* reference https://chat.openai.com/share/2f9ff557-4e74-4ea8-9a5a-704717523303 /*