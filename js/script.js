document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const darkModeToggle = document.getElementById('darkModeToggle');

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

        // Display success message
        const submitMessage = document.createElement('p');
        submitMessage.id = 'submit-message';
        submitMessage.textContent = 'Form submitted successfully!';
        form.appendChild(submitMessage);
        setTimeout(() => {
            submitMessage.remove();
        }, 3000);
    }

    // Attach form submission handler to the form
    form.addEventListener('submit', handleFormSubmit);

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function () {
        const body = document.body;
        const isDarkMode = body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check if the user previously preferred dark mode
    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Function to toggle Dark Mode
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    }

    // Event listeners
    form.addEventListener('submit', handleFormSubmit);
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // Check if the user previously preferred dark mode
    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});
// https://chat.openai.com/share/85c4f539-97a3-4fbe-a7f0-ce629f055cd1  + https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87 
// https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87