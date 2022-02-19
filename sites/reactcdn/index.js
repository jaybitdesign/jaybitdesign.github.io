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
        <div className="bg-light d-flex justify-content-center align-items-center py-5 mb-4">
            <div className="container text-center py-5">
                <h1 className="display-1 fw-bold text-center">{h1}</h1>
                <h2 className="display-6 text-center mb-4">{h2}</h2>
                <a className="btn btn-primary" role="button" href="#features">How does it work?</a>
                <a className="btn btn-link" role="button" href="https://reactjs.org/docs/add-react-to-a-website.html">React Docs</a>
            </div>
        </div>
    )
}

const Features = ({ title }) => {
    const Feature = ({ primary, secondary, src }) => {
        return (
            <div className="col-md-4 col-lg-3 text-center mb-4">
                <img className="img-fluid" src={src} alt={primary} />
                <h4 className="fw-bold display-6">{primary}</h4>
                <p className="fw-lighter mb-1">{secondary}</p>
                <a href="https://reactjs.org/docs/add-react-to-a-website.html">Learn more...</a>
            </div>
        )
    }
    return (
        <div className="container py-5 mb-5">
            <h3 className="display-4 text-center mb-5">{title}</h3>
            <div className="row d-flex justify-content-center">
                <Feature primary="JSX+Babel" secondary="The client receives uncompiled JSX and links to React and the Babel compiler." src="img/download.png" />
                <Feature primary="Compilation" secondary="JSX is transformed into regular JavaScript in the browser at runtime." src="img/compilation.png" />
                <Feature primary="Excecution" secondary="JavaScript is executed by the clients browser after the code transformation." src="img/execution.png" />
            </div>
        </div>
    )
}

const List = () => {
    const ListButton = ({ id }) => {
        return (
            <button onClick={() => showArticle(id)} className="list-group-item list-group-item-action link-primary"><span>Article Number {id}</span></button>
        )
    }
    return (
        <div className="container pb-5">
            <h3 className="display-4 text-center mb-5">Change data without refresh!</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 py-2" id="current">
                    <Article id={0} />
                </div>
                <div id="list" className="col-lg-3 py-2">
                    <div className="card">
                        <div className="card-body bg-light">
                            <h4 className="mb-3">Article List</h4>
                            <div className="list-group">
                                <ListButton id={0} />
                                <ListButton id={1} />
                                <ListButton id={2} />
                                <ListButton id={3} />
                                <ListButton id={4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Article = ({ id }) => {
    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum. In eleifend lacus ac ligula rhoncus rutrum. Vestibulum et venenatis ex. Sed pretium mi at molestie ullamcorper. Vestibulum blandit metus vitae dolor rhoncus volutpat.Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum.";
    switch (id) {
        case (0):
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum. In eleifend lacus ac ligula rhoncus rutrum. Vestibulum et venenatis ex. Sed pretium mi at molestie ullamcorper. Vestibulum blandit metus vitae dolor rhoncus volutpat.Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum."
            break;
        case (1):
            content = "Ut enim urna, hendrerit sed neque sit amet, tincidunt finibus erat. Integer iaculis nibh sit amet rutrum scelerisque. Proin ac lectus semper, pharetra quam a, venenatis sapien. Duis dignissim est a odio vestibulum hendrerit. Morbi non interdum leo. Integer vulputate felis quis tortor viverra suscipit. Morbi a sapien faucibus, suscipit nulla ac, dapibus diam. Phasellus vel lorem diam. Nam sodales nec erat in luctus. Cras luctus felis est, ut sagittis tortor rutrum non. Duis vitae ante a mauris tempus mollis. Nulla eu enim nunc."
            break;
        case (2):
            content = "Curabitur ultrices, felis id mattis vulputate, justo leo condimentum nunc, a maximus nunc nulla in justo. Sed vehicula vulputate purus, sit amet rutrum mi ullamcorper id. Fusce mattis sem ante, dapibus gravida mi finibus quis. Nam viverra nisi odio. In a fermentum leo. Etiam vestibulum felis eget aliquam vestibulum. Nulla a mattis ipsum. Sed ullamcorper feugiat elit, sed molestie quam. Nulla finibus velit at libero placerat, in ultricies turpis commodo. Suspendisse interdum metus sit amet erat rutrum, quis aliquet lorem congue."
            break;
        case (3):
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et blandit nisi. Aenean dapibus, nisi id venenatis ultrices, libero augue ullamcorper leo, et fermentum nunc eros at dui. Nulla ullamcorper, nulla eu bibendum gravida, lectus metus ultrices mi, sed maximus magna diam at lacus. Sed non massa faucibus, malesuada nunc eu, fringilla purus. Sed sagittis ante ac augue tempor, nec interdum nisl dignissim. Vivamus vulputate, ex eu semper vehicula, augue ipsum dignissim lorem, vel maximus justo massa ac justo. Morbi eu tortor at orci interdum semper. Integer et suscipit ligula. Sed vel lacinia risus. Sed justo urna, fringilla in est sed, bibendum facilisis nunc."
            break;
        case (4):
            content = "Nullam eu magna tincidunt, viverra ligula at, tempus arcu. Pellentesque dapibus pretium ligula, gravida eleifend ex. Praesent pellentesque mattis eros vel sodales. Vestibulum ornare urna sem. Ut convallis dapibus tortor, vel iaculis purus imperdiet sed. Etiam tincidunt venenatis nunc vel auctor. Fusce suscipit vulputate est. Integer id facilisis dui, nec tempor lorem. Nam ut metus sollicitudin, ultricies purus vel, vulputate erat. Nunc porta orci sit amet libero mollis, non varius mi fringilla. In hac habitasse platea dictumst. Aenean eget turpis mattis, egestas massa ut, consectetur libero. Donec aliquam purus in urna laoreet, sit amet suscipit mauris mattis."
            break;
    }
    return (
        <div className="card">
            <div className="card-header bg-light">
                <h4 className="display-6 mb-0">Article Number {id}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

function showArticle(id) {
    ReactDOM.render(<Article id={id} />, document.getElementById("current"))
}

ReactDOM.render(<Navbar brand="React CDN" />, document.getElementById("navbar"))
ReactDOM.render(<Jumbotron h1="React w/ CDN" h2="Plus Babel!" />, document.getElementById("jumbotron"))
ReactDOM.render(<Features title="How does it work?" />, document.getElementById("features"))
ReactDOM.render(<List />, document.getElementById("articles"))