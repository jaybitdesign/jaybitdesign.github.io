const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-light navbar-expand-sm bg-white">
            <div className="container-fluid"><a className="navbar-brand" href="#">{brand}</a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div id="navcol-1" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="https://jaybitdesign.github.io/">My Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/jaybitdesign">Github</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}