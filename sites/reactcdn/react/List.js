const articles = [
    {
        fullName: "Jacobus H. van 't Hoff",
        category: "The Nobel Prize in Chemistry",
        motivation: "In recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions.",
        year: "1901",
        src: "https://www.nobelprize.org/images/hoff-13535-portrait-mini.jpg"
    },
    {
        fullName: "Sully Prudhomme",
        category: "The Nobel Prize in Literature",
        motivation: "In special recognition of his poetic composition, which gives evidence of lofty idealism, artistic perfection and a rare combination of the qualities of both heart and intellect.",
        year: "1901",
        src: "https://www.nobelprize.org/images/prudhomme-13536-portrait-mini.jpg"
    },
    {
        fullName: "Wilhelm Conrad Röntgen",
        category: "The Nobel Prize in Physics",
        motivation: "In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him.",
        year: "1901",
        src: "https://www.nobelprize.org/images/wien-12884-portrait-mini.jpg"
    },
    {
        fullName: "Emil Adolf von Behring",
        category: "The Nobel Prize in Physiology or Medicine",
        motivation: "For his work on serum therapy, especially its application against diphtheria, by which he has opened a new road in the domain of medical science and thereby placed in the hands of the physician a victorious weapon against illness and deaths.",
        year: "1901",
        src: "https://www.nobelprize.org/images/behring-13537-portrait-mini.jpg"
    },
    {
        fullName: "Élie Ducommun",
        category: "The Nobel Peace Prize",
        motivation: "For his untiring and skilful directorship of the Bern Peace Bureau.",
        year: "1901",
        src: "https://www.nobelprize.org/images/ducommun-13544-portrait-mini.jpg"
    }
]


function showArticle(id) {
    ReactDOM.render(<Article id={id} />, document.getElementById("current"))
}

const List = () => {
    const ListButton = ({ id }) => {
        return (
            <button onClick={() => { showArticle(id) }} className="list-group-item list-group-item-action link-primary"><span>#{id + 1}: {articles[id].fullName.split(" ")[0]} {articles[id].fullName.split(" ")[1].split("")[0].toUpperCase()}.</span></button>
        )
    }
    return (
        <div className="container pb-5">
            <h3 className="display-4 text-center mb-5">Change data without refresh!</h3>
            <div className="row d-flex justify-content-center">
                <div id="list" className="col-lg-3 pb-2">
                    <div className="card">
                        <div className="card-body bg-light pt-0">
                            <h4 className="mb-3 pt-3">Nobel Prize Winners</h4>
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
                <div className="col-lg-6 py-0 border rounded px-0" id="current">

                </div>
            </div>
        </div>
    )
}

const Article = ({ id }) => {
    return (
        <div className="card border-0">
            <div className="card-header bg-light">
                <h4 className="display-6 mb-0">#{id + 1}: {articles[id].fullName}</h4>
            </div>
            <div className="card-body">
                <h4 className="mb-3">{articles[id].category}</h4>
                <img className="mb-4 img-fluid" src={articles[id].src} />
                <p className="fs-5 card-text">{articles[id].motivation}</p>
                <p className="text-muted">{articles[id].year}</p>
            </div>
        </div>
    )
}