// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Project gallery modal
const projectImages = document.querySelectorAll('.project-img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalDesc = document.querySelector('.modal-desc');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalDesc.textContent = img.alt;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
