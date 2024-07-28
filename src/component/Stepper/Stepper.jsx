export default function Stepper({header , body , stepps}) {
    return (

        <div className="row">
            <div className="col-3">
                <p>
                    <span className="value">
                    {stepps}
                    </span>
                </p>
            </div>
            <div className="col-9">
                <p className="header">{header}</p>
                <span className="body">{body}</span>
            </div>
        </div>
    )
}