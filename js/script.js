document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Assign variables
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const submitMessage = document.getElementById('submit-message');

    // Step 2: Functions
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        if (submitMessage) {
            submitMessage.classList.add('visible');
            setTimeout(() => {
                submitMessage.classList.remove('visible');
            }, 3000);
        }
    }

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    }

    // Step 3: Event listeners
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Check if the user previously preferred dark mode
    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        body.classList.add('dark-mode');
    }
});
