function showArticle(id) {
    ReactDOM.render(<Article id={id} />, document.getElementById("current"))
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