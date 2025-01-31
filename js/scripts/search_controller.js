   
   
   
   
   
   
   
   // Sample data (replace with your actual content and links)
const searchData = [
    

];

// Get elements
const searchBar = document.getElementById("search-bar");
const suggestionsBox = document.getElementById("suggestions");

// Function to display suggestions
function showSuggestions(filteredData) {
    if (filteredData.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    // Sort suggestions alphabetically
    filteredData.sort((a, b) => a.title.localeCompare(b.title));

    // Create suggestion items
    const suggestionsHTML = filteredData
        .map(
            (item) =>
                `<div class="suggestion-item" data-link="${item.link}">${item.title}</div>`
        )
        .join("");

    // Display suggestions
    suggestionsBox.innerHTML = suggestionsHTML;
    suggestionsBox.style.display = "block";
}

// Event listener for search input
searchBar.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredData = searchData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
    );
    showSuggestions(filteredData);
});

// Event listener for clicking a suggestion
suggestionsBox.addEventListener("click", function (e) {
    if (e.target.classList.contains("suggestion-item")) {
        const link = e.target.getAttribute("data-link");
        window.location.href = link; // Redirect to the selected link
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-container")) {
        suggestionsBox.style.display = "none";
    }
});


function addSdata(title, link) {
    searchData.push({ title, link });
}

