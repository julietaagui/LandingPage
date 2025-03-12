
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-pri">
      <div className="container my-2">
        <a className="navbar-brand text-white" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span> {/* Ícono de hamburguesa en blanco */}
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Redes Sociales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Testimoniales</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light rounded-pill px-3 py-1" href="#">Contáctame</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
