document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display submitted data (you can modify this part based on your needs)
        console.log("Submitted data:", data);

        // Clear form inputs after submission
        contactForm.reset();
    }

    contactForm.addEventListener('submit', handleSubmit);
});


// https://chat.openai.com/share/85c4f539-97a3-4fbe-a7f0-ce629f055cd1  + https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87 
// https://chat.openai.com/share/9de6b8ea-0a6e-4c4e-bdee-20875d42dd87