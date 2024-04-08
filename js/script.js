// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Project gallery modal
const projectImages = document.querySelectorAll('.project-img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalDesc = document.querySelector('.modal-desc');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalDesc.textContent = img.alt;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Form submission
const contactForm = document.getElementById('contact-form');

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = contactForm.elements['name'].value;
    const email = contactForm.elements['email'].value;
    const phone = contactForm.elements['phone'].value;
    const message = contactForm.elements['message'].value;

    // Validate form inputs (you can add more validation logic as needed)
    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Send form data to backend or perform other actions (e.g., display success message)
    displayThankYouMessage();
    contactForm.reset(); // Reset form after submission
}

contactForm.addEventListener('submit', handleSubmit);

// Function to display thank you message
function displayThankYouMessage() {
    const thankYouMessage = document.createElement('div');
    thankYouMessage.textContent = 'Thank you for your email! 😊';
    thankYouMessage.classList.add('thank-you-message');
    document.body.appendChild(thankYouMessage);

    // Remove the message after 3 seconds
    setTimeout(() => {
        thankYouMessage.remove();
    }, 3000);
}
