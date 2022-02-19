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