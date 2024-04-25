export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-xl-5">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
      </nav>
    )
}
