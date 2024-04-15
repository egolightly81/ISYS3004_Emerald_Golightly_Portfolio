document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const socialLinks = document.querySelectorAll('.social-links a');

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display submitted data (you can modify this part based on your needs)
        console.log('Submitted data:', data);

        // Clear form inputs after submission
        form.reset();

        // Add a success class to the form
        form.classList.add('form-success');

        // Display success message
        const submitMessage = document.getElementById('submit-message');
        submitMessage.textContent = 'Form submitted successfully!';

        // Remove the success class and message after 3 seconds
        setTimeout(() => {
            form.classList.remove('form-success');
            submitMessage.textContent = '';
        }, 3000);
    }

    // Function to toggle Dark Mode
    function toggleDarkMode(event) {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Function to open social media links in a new tab
    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const url = this.getAttribute('href');
            window.open(url, '_blank'); // Open link in a new tab
        });
    });

    // Event listener for form submission
    form.addEventListener('submit', handleFormSubmit);

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // Check if the user previously preferred dark mode
    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});
