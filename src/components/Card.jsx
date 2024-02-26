function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card--image"></img>
            <div className="card--content">
                <div className="card--header">
                    <p>{props.country}</p>
                    <a href={props.googleMap}>Google map</a>
                </div>
                <h2 className="card--place-name">{props.placeName}</h2>
                <h4 className="card--dates">{props.dates}</h4>
                <p className="card--description">{props.description}</p>
            </div>

        </div>
    )
}

export default Card