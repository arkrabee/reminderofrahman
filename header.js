

let header = `
<!-- Navbar -->
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">RML</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link ripple" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link ripple" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link ripple" href="#causes">Causes</a></li>
          <li class="nav-item"><a class="nav-link ripple" href="#contact">Contact</a></li>
        </ul>
        







      </div>
    </div>
  </nav>

  <!-- Offcanvas Menu for Mobile -->
  <div class="offcanvas offcanvas-end" style="width: 40%;" id="offcanvasMenu">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
    <li><a class="nav-item" href=' home.html' to='/rml' >Home</a></li>
    <li><a class="nav-item" href=' quran.html' to='/quran'>Qur'an</a></li>
    <li><a class="nav-item" href=' thouheed.html' to='/thouheed' href="#">Thouheed</a></li>
    <li><a class="nav-item" href=' about.html' to='/about' href="#">About</a></li>
      </ul>
    </div>
  </div>
`

document.querySelector("#header").innerHTML = header;
