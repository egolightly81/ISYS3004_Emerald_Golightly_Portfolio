document.addEventListener('DOMContentLoaded', function () {
    // Assign variables
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const form = document.getElementById('contact-form');
    const submitMessage = document.getElementById('submit-message');

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Display success message if it exists
        if (submitMessage) {
            submitMessage.classList.add('visible');
            setTimeout(() => {
                submitMessage.classList.remove('visible');
            }, 3000);
        }
    }

    // Function to toggle Dark Mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage as a boolean
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    }

    // Event listener for form submission
    if (form) { // Check if form exists before adding event listener
        form.addEventListener('submit', handleFormSubmit);
    }

    // Event listener for dark mode toggle
    if (darkModeToggle) { // Check if darkModeToggle button exists before adding event listener
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Check if the user previously preferred dark mode
    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        body.classList.add('dark-mode');
        if (darkModeToggle) { // Check if darkModeToggle button exists before setting checked state
            darkModeToggle.checked = true;
        }
    }
});

