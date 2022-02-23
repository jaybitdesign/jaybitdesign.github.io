const render = () => {
    ReactDOM.render(<Navbar brand="React.js + CDN" />, document.getElementById("navbar"))

    ReactDOM.render(<Jumbotron h1="React.js + CDN" h2="Compiled with Babel!" />, document.getElementById("jumbotron"))

    ReactDOM.render(<Features title="How does it work?" />, document.getElementById("features"))

    ReactDOM.render(<List />, document.getElementById("articles"))
}

render()