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

    // Dark mode toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('darkModeToggle');

        function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        
        // Save the user's preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    darkModeToggle.addEventListener('change', toggleDarkMode);

    const isDarkModePreferred = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModePreferred) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});

















// https://chat.openai.com/share/85c4f539-97a3-4fbe-a7f0-ce629f055cd1  + https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87 
// https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87