// Example: Adding interactivity to the gallery
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert("You clicked on a galaxy image!");
        });
    });
});
