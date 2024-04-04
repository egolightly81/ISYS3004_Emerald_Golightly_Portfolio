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

projectImages.forEach(imageUrl => {
    const image = document.createElement('img');
    image.src = imageUrl; // No folder specified for direct image reference
    image.alt = 'Project Image';
    image.classList.add('project-image');

    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalContent.textContent = 'Project details here'; // Update with project details if needed
        // You can also set the modal content to an enlarged version of the clicked image:
        // modalContent.innerHTML = `<img src="${image.src}" alt="Project Image">`;
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
