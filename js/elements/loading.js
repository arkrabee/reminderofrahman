  // Wait for the entire page to load
  window.addEventListener('load', () => {
    // Hide the loading overlay
    document.getElementById('loadingOverlay').style.display = 'none';
    // Show the main content
    document.getElementById('mainContent').style.display = 'block';
  });