/* updated no images ref ChatGPT: https://chat.openai.com/share/2f9ff557-4e74-4ea8-9a5a-704717523303 */

function displayProjectDetails(projectNumber) {
    const modalContent = document.querySelector('.modal-content');

    // Update modal content based on project number
    if (projectNumber === 1) {
        modalContent.textContent = 'Details of Project 1';
    } else if (projectNumber === 2) {
        modalContent.textContent = 'Details of Project 2';
    } else if (projectNumber === 3) {
        modalContent.textContent = 'Details of Project 3';
    }

    // Display the modal
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

