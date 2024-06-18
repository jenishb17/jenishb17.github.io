document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");
    const sectionButtons = document.querySelectorAll(".section-button");

    function loadContent(sectionName) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", sectionName + ".html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    fadeContent(xhr.responseText, sectionName);
                } else {
                    console.error("Failed to fetch page: ", xhr.status);
                    mainContent.innerHTML = `<p>Error loading content!</p>`;
                }
            }
        };
        xhr.send();
    }

    function fadeContent(newContent, sectionName) {
        mainContent.style.opacity = 0;
        setTimeout(() => {
            mainContent.innerHTML = newContent;
            fadeInContent();
            initializeCarousel();
            // Conditionally initialize the carousel for the portfolio section
            // if (sectionName === 'portfolio') {
            //   initializeCarousel();
            // }
        }, 500);
    }

    function fadeInContent() {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.05;
            if (opacity >= 1) {
                opacity = 1;
                clearInterval(fadeIn);
            }
            mainContent.style.opacity = opacity;
        }, 25);
    }

    sectionButtons.forEach(button => {
        button.addEventListener("click", function () {
            sectionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadContent(this.getAttribute("data-section"));
        });
    });

    // Initially set the home button as active on page load
    document.getElementById('home-button').classList.add('active');
    loadContent('home'); // Assuming 'home' is the initial section

    function initializeCarousel() {
        document.getElementById('scrollLeft').addEventListener('click', function() {
            const carousel = document.getElementById('carousel');
            const itemWidth = document.querySelector('.portfolio-item').offsetWidth + 20; // item width + margin
            carousel.scrollBy({
                left: -itemWidth, // Scroll by the width of one item
                behavior: 'smooth'
            });
        });

        document.getElementById('scrollRight').addEventListener('click', function() {
            const carousel = document.getElementById('carousel');
            const itemWidth = document.querySelector('.portfolio-item').offsetWidth + 20; // item width + margin
            carousel.scrollBy({
                left: itemWidth, // Scroll by the width of one item
                behavior: 'smooth'
            });
        });
    }
});
