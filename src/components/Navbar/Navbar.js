import './Navbar.css';


const Navbar=()=>{
return <nav class="navbar navbar-expand-lg navbar-light bg-light border border-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="/">Medpiper</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="/">About</a>
      <a class="nav-link" href="/">FAQs</a>
      <a class="nav-link" href="/">Contact</a>
    </div>
  </div>
</div>
</nav>
}
export default Navbar;