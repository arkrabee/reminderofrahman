
let navLinks = ""


for(let i = 0; i < links.length; i++){
   navLinks += `
<li class="nav-item">
    <a class="nav-link ripple" href='${links[i][1]}.html'>${links[i][0]}</a>
  </li>
`
  
}

let dropdownLinks = ""


for(let s = 0; s < links.length; s++){
  dropdownLinks += `
  <li><a class="dropdown-item" href="${links[s][1]}.html">${links[s][0]}</a></li>
`
  
}

let header = `
<div class="container-fluid banner-rml" >
    <div class="row p-5  text-center fs-large text-white nav-banner" style="flex-direction: row;">
      <div>
      <img src="../assets/images/rml.png"  class="img-fluid" alt="">
      </div>

    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="row" style='width: 100%'>
        <div class="col-12 d-flex" >
          <button class="navbar-toggler" type="button"  class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" >
            <ul class="navbar-nav ms-auto">
             
                  <button class="navbar-toggler" style='display: block;' class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu">
                     <span class="navbar-toggler-icon"></span>
                  </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

<div class="search-container">
    <input type="text" id="search-bar" placeholder="Search..." />
    <div id="suggestions"></div>
</div>


  <div class="row">
  <div class="col-12 arrow" id='ark-arrow' onclick="history.back()">
      <svg width="3rem"  height="rem" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

          <style type="text/css">
              .st0{fill:#333333;
              background: grey;
              }
          </style>
          
          <g id="Layer_1"></g>
          
          <g id="Layer_2">
          
          <g>
          
          <path class="st0" d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23    c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7    c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69    c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41    c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39    c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32    c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09    c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63    l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z"></path>
          
          </g>
          
          </g>
          
          </svg>
  </div>
</div>






  

<div class="offcanvas offcanvas-end" tabindex="-1" id="menu" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="menu">Catogeries</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
    <a class="nav-link ripple" href="home.html">Home</a>
  </li>

<li class="nav-item">
    <a class="nav-link ripple" href="aboutus.html">About Us</a>
  </li>

<li class="nav-item">
    <a class="nav-link ripple" href="feedback.html">Feedback</a>
  </li>
<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu">
              ${dropdownLinks}
            </ul>
          </li>
    </ul>

    
       

  </div>
</div>
`;















document.querySelector("#header").innerHTML = header

document.querySelector("#rml-404-page-another-pages").innerHTML = 
`




<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Another Pages
  </button>
  <ul class="dropdown-menu">
    ${dropdownLinks}
  </ul>
</div>
  
`;





