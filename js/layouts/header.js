let links = [
  ["Home", "home"],
  ["About Us", "aboutus"],
  ["Feedback", "feedback"],

]

let ilmLinks = [
  ["Qur'an", "quran"],
  ["",""],
]

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
    <div class="row p-5 bg-secondary text-center fs-large text-white" style='flex-direction: row;'>
      <div>
      <img src="../assets/images/rml.png"  class="img-fluid" alt="">
      </div>
      <div>
      <img width='100' height='100' src="https://yt3.googleusercontent.com/r35Vx2xo6Pv-FeaKONcZX5hLdVHDpR9rzlG0tq0C7mEe-g8uCM01J-Ezm7FmWe_gGbgCUTpJjA=s160-c-k-c0x00ffffff-no-rj" alt="">
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-12" >
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



  

<div class="offcanvas offcanvas-end" tabindex="-1" id="menu" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="menu">Catogeries</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            ${navLinks}
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