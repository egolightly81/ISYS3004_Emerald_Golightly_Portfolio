/* updated with file path corrected, ref ChatGPT: https://chat.openai.com/share/2f9ff557-4e74-4ea8-9a5a-704717523303 */

function displayProjectDetails(projectNumber) {
    const projectImage = document.getElementById('projectImage');
    const modalContent = document.querySelector('.modal-content');

    // Update image source based on project number
    if (projectNumber === 1) {
        projectImage.src = 'images/project1_IoT.jpg';
        modalContent.textContent = 'Details of Project 1';
    } else if (projectNumber === 2) {
        projectImage.src = 'images/project2_AH.jpg';
        modalContent.textContent = 'Details of Project 2';
    } else if (projectNumber === 3) {
        projectImage.src = 'images/project3_carboncapture.jpg';
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
