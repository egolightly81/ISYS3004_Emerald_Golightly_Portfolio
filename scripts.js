document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-button');
    const modalContent = document.getElementById('modal-content');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectNumber = parseInt(button.dataset.projectNumber);
            displayProjectDetails(projectNumber);
        });
    });

    closeModalButton.addEventListener('click', closeModal);

    function displayProjectDetails(projectNumber) {
        // Update modal content based on project number
        if (projectNumber === 1) {
            modalContent.textContent = 'Details of Project 1';
        } else if (projectNumber === 2) {
            modalContent.textContent = 'Details of Project 2';
        } else if (projectNumber === 3) {
            modalContent.textContent = 'Details of Project 3';
        }

        // Display the modal
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
/* updated no images ref ChatGPT: https://chat.openai.com/share/2f9ff557-4e74-4ea8-9a5a-704717523303*/