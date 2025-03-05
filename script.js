

// projt card hovering efecty
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('project-card-hover');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('project-card-hover');
    });
});

// butter hover
document.querySelectorAll('.primary-button, .secondary-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});






