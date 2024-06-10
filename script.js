document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");
    const sectionButtons = document.querySelectorAll(".section-button");
    
    function loadContent(sectionName) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", sectionName + ".html", true);
    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
    fadeContent(xhr.responseText);
    } else {
    console.error("Failed to fetch page: ", xhr.status);
    mainContent.innerHTML = `<p>Error loading content!</p>`;
    }
    }
    };
    xhr.send();
    }
    
    function fadeContent(newContent) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
    mainContent.innerHTML = newContent;
    fadeInContent();
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
    });