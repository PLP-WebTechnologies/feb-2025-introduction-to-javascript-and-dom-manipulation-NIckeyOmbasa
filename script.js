document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const toggleElementBtn = document.getElementById("toggleElementBtn");
    const extraElement = document.getElementById("extraElement");

    // Change text content dynamically
    changeTextBtn.addEventListener("click", function () {
        title.textContent = "JavaScript is fun!";
        description.textContent = "You've successfully changed the text!";
        title.classList.toggle("highlight");
    });

    // Add or remove an element dynamically
    toggleElementBtn.addEventListener("click", function () {
        if (extraElement.style.display === "none") {
            extraElement.style.display = "block";
        } else {
            extraElement.style.display = "none";
        }
    });
});
