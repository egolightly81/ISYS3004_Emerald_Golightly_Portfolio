document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Assign variables to the DOM elements
    const form = document.getElementById('contact-form');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Step 2: Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Display success message if it exists
        const submitMessage = document.getElementById('submit-message');
        if (submitMessage) {
            submitMessage.classList.add('visible');
            setTimeout(() => {
                submitMessage.classList.remove('visible');
            }, 3000);
        }
    }

    // Function to toggle Dark Mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage as a boolean
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    }

    // Step 3: Make events trigger our functions

    // Attach form submission handler to the form
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
