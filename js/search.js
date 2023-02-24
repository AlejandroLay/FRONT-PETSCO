const input = document.getElementById("search-input");
const divs = document.getElementsByClassName("search-div");

input.addEventListener("input", function() {
    if (input.value.trim() === "") {
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
        }
    }
});