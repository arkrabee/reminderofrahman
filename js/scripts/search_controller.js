const data = [
    { name: "home", link: "home.html" },
    { name: "about", link: "about.html" },
    { name: "aboutus", link: "aboutus.html" },
    { name: "feedback", link: "feedback.html" },
    { name: "സയ്യിദ് സനാ ഉല്ലാ മക്തി തങ്ങൾ", link: "sayyid_sana_ulla_makthi_thangal.html" },

  ];

  function showSuggestions(query) {
    const suggestionsBox = document.getElementById('suggestions');
    const searchInput = document.getElementById('search-input');
    
    suggestionsBox.innerHTML = ""; // Clear previous suggestions

    if (query.trim() === "") {
      return; // If the query is empty, do nothing
    }

    // Get the position and size of the input field
    const rect = searchInput.getBoundingClientRect();
    suggestionsBox.style.top = `${rect.bottom + window.scrollY}px`;
    suggestionsBox.style.left = `${rect.left + window.scrollX}px`;
    suggestionsBox.style.width = `${rect.width}px`;

    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredData.length > 0) {
      filteredData.forEach(item => {
        const suggestionItem = document.createElement('a');
        suggestionItem.href = item.link;
        suggestionItem.textContent = item.name;
        suggestionsBox.appendChild(suggestionItem);
      });
    } else {
      const noResultItem = document.createElement('div');
      noResultItem.textContent = "No results found";
      noResultItem.style.padding = "10px";
      noResultItem.style.color = "#666";
      suggestionsBox.appendChild(noResultItem);
    }
  }

  // Hide suggestions when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-controller')) {
      document.getElementById('suggestions').innerHTML = "";
    }
  });

  // Adjust position of suggestions on scroll or resize
  window.addEventListener('scroll', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');
    if (searchInput.value.trim() !== "") {
      const rect = searchInput.getBoundingClientRect();
      suggestionsBox.style.top = `${rect.bottom + window.scrollY}px`;
      suggestionsBox.style.left = `${rect.left + window.scrollX}px`;
    }
  });

  window.addEventListener('resize', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');
    if (searchInput.value.trim() !== "") {
      const rect = searchInput.getBoundingClientRect();
      suggestionsBox.style.top = `${rect.bottom + window.scrollY}px`;
      suggestionsBox.style.left = `${rect.left + window.scrollX}px`;
      suggestionsBox.style.width = `${rect.width}px`;
    }
  });