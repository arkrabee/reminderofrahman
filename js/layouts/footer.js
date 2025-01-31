let dr = new Date();

let footer = `
<div class="container-fluid">
  <div class="row">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted">© ${dr.getFullYear()} Company, Inc</p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href='index.html' class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href='feedback.html' class="nav-link px-2 text-muted">Feedback</a></li>
        <li class="nav-item"><a href='instragram.com' class="nav-link px-2 text-muted">Instagram</a></li>
        <li class="nav-item"><a href='facebook.com' class="nav-link px-2 text-muted">Facebook</a></li>
        <li class="nav-item"><a href='aboutus.html' class="nav-link px-2 text-muted">About Us</a></li>
 
      </ul>
    </footer>
  </div>
</div>

`

document.querySelector("#footer").innerHTML = footer