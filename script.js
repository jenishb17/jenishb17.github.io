document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");
    const sectionButtons = document.querySelectorAll(".section-button");

    function loadContent(sectionName) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", sectionName + ".html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                mainContent.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    sectionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionName = button.getAttribute("data-section");
            loadContent(sectionName);
        });
    });

    loadContent("home"); // Load the initial "Home" section content
});