// Step methodology has been followed 

// Step 1 assign a variable to the dom elements


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const darkModeToggle = document.getElementById('darkModeToggle');

// Step 2 write the function to handle the events

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Display success message
        const submitMessage = document.createElement('div');
        submitMessage.classList.add('submit-message');
        submitMessage.textContent = 'Form submitted successfully!';
        form.appendChild(submitMessage);

        // Remove the success message after 3 seconds
        setTimeout(() => {
            submitMessage.remove();
        }, 3000);
    }

    // Function to toggle Dark Mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    }
// Step 3 make the event trigger our functions

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
