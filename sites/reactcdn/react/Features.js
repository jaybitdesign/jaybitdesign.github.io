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
                <Feature primary="JSX+Babel" secondary="The client receives uncompiled JSX and links to React and the Babel compiler." src="../img/download.png" />
                <Feature primary="Compilation" secondary="JSX is transformed into regular JavaScript in the browser at runtime." src="../img/compilation.png" />
                <Feature primary="Excecution" secondary="JavaScript is executed by the clients browser after the code transformation." src="../img/execution.png" />
            </div>
        </div>
    )
}