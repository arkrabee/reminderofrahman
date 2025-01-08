// List of CSS and JS files to load
const resources = {
    css: [
       "../rml.css",
       "../rml2.css"

        
    ],
    js: [
        "../det.js",
        "../rml.js",
        "../header.js"
    ]
};

// Function to dynamically load CSS files
function loadCSS(files) {
    files.forEach(file => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = file;
        document.head.appendChild(link);
    });
}

// Function to dynamically load JS files
function loadJS(files) {
    files.forEach(file => {
        const script = document.createElement("script");
        script.src = file;
        script.type = "text/javascript";
        document.body.appendChild(script);
    });
}

// Load all resources
loadCSS(resources.css);
loadJS(resources.js);
document.querySelector("body").innerHTML += `<!-- Font Awesome for social media icons -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>`;