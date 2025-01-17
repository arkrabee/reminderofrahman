// let searchData = [
//     {
//       title: "Home",
//       url: "/home",
//       content: "Welcome to our homepage. Learn about our services and mission."
//     },
//     {
//       title: "About",
//       url: "/about",
//       content: "About us page with details about our company history and team."
//     },
//     {
//       title: "Services",
//       url: "/services",
//       content: "Explore the services we offer and find the perfect solution for you."
//     }
//   ];

//   const searchInput = document.getElementById('search-input');
//   const suggestionBox = document.getElementById('suggestion-box');

//   searchInput.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase().trim();
//     if (query) {
//       const results = searchData.filter(item =>
//         item.title.toLowerCase().includes(query) ||
//         item.content.toLowerCase().includes(query)
//       );
//       displaySuggestions(results);
//     } else {
//       suggestionBox.classList.add('d-none');
//     }
//   });

//   function displaySuggestions(results) {
//     if (results.length > 0) {
//       suggestionBox.innerHTML = results
//         .map(result => `
//           <div class="suggestion-item" data-url="${result.url}">
//             <strong>${result.title}</strong>
//             <p class="mb-0 text-muted">${result.content.substring(0, 50)}...</p>
//           </div>
//         `)
//         .join('');
//       suggestionBox.classList.remove('d-none');
//     } else {
//       suggestionBox.innerHTML = '<div class="suggestion-item text-muted">No results found.</div>';
//       suggestionBox.classList.remove('d-none');
//     }
//   }

//   suggestionBox.addEventListener('click', event => {
//     const item = event.target.closest('.suggestion-item');
//     if (item && item.dataset.url) {
//       window.location.href = item.dataset.url;
//     }
//   });

//   document.addEventListener('click', event => {
//     if (!suggestionBox.contains(event.target) && event.target !== searchInput) {
//       suggestionBox.classList.add('d-none');
//     }
//   });



  


  