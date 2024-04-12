document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display submitted data (you can modify this part based on your needs)
        console.log("Submitted data:", data);

        // Clear form inputs after submission
        form.reset();
    });
});

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