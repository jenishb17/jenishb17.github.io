document.getElementById('scrollLeft').addEventListener('click', function() {
    const carousel = document.getElementById('carousel');
    const itemWidth = document.querySelector('.portfolio-item').offsetWidth + 20; // item width + margin
    carousel.scrollBy({
        left: -itemWidth * 2, // Scroll by the width of two items
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    const carousel = document.getElementById('carousel');
    const itemWidth = document.querySelector('.portfolio-item').offsetWidth + 10; // item width + margin
    carousel.scrollBy({
        left: itemWidth * 1, // Scroll by the width of two items
        behavior: 'smooth'
    });
});

