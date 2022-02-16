const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-light navbar-expand-sm bg-white">
            <div className="container-fluid"><a className="navbar-brand" href="#">{brand}</a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div id="navcol-1" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="https://jaybitdesign.github.io/">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/jaybitdesign">Github</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const Jumbotron = ({ h1, h2 }) => {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="container">
                <h1 className="display-1 fw-bold text-center">{h1}</h1>
                <h2 className="display-6 text-center">{h2}</h2>
            </div>
        </div>
    )
}

const Features = ({ title }) => {
    const Feature = ({ primary, secondary }) => {
        return (
            <div className="col-md-4 text-center">
                <h1 className="display-6">{primary}</h1><hr />
                <p className="fw-lighter">{secondary}</p>
            </div>
        )
    }
    return (
        <div className="container py-5">
            <h3 className="display-4 text-center mb-5">{title}</h3>
            <div className="row">
                <Feature primary="Babel + JSX" secondary="The client receives uncompiled JSX and links to React and the Babel compiler." />
                <Feature primary="JavaScript" secondary="JSX is transformed into regular JavaScript in the browser at runtime." />
                <Feature primary="Execution" secondary="JavaScript is executed by the clients browser with a noticeable hit to speed." />
            </div>
        </div>
    )
}

ReactDOM.render(<Navbar brand="React CDN" />, document.getElementById("navbar"))
ReactDOM.render(<Jumbotron h1="React w/ CDN" h2="Plus Babel!" />, document.getElementById("jumbotron"))
ReactDOM.render(<Features title="How does it work?" />, document.getElementById("features"))