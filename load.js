// List of CSS and JS files to load
const resources = {
    css: [
        "elements/loading.css",
        "elements/search.css",
        "layouts/fonts.css",
        "layouts/header.css",
        "elements/folders.css",
        "elements/script.css",



    ],
    js: [
        "library/jquery.js",
        "scripts/script.js",
        "elements/loading.js",
        "scripts/script_1.js",
        "../workspace/links.js",
        "elements/essays.js",
        "layouts/header.js",
        "layouts/header-balance.js",
        "layouts/footer.js",
        "scripts/script_2.js",
        "scripts/search_controller.js",
        "elements/favicon.js",
    ]
};

// Function to dynamically load CSS files
function loadCSS(files, suffix) {
    files.forEach(file => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = suffix + file;
        document.head.appendChild(link);
    });
}

// Function to dynamically load JS files
function loadJS(files, suffix) {
    files.forEach(file => {
        const script = document.createElement("script");
        script.src = suffix + file;
        script.type = "text/javascript";
        document.body.appendChild(script);
    });
}

// Load all resources
loadCSS(resources.css, "../css/");
loadJS(resources.js, "../js/");
document.querySelector("body").innerHTML += `<!-- Font Awesome for social media icons -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>`;