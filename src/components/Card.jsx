//CSS
import "../styles/components/Card.css"

function Card({color, icon, type, value, unitOfMeasure})
{
    return (
        <section className="card">
            <div className={`card__icon-container card__icon-container--${color}`}>
                <img className="card__icon-caontainer__icon" src={icon} alt={`${type} icone`}/>
            </div>
            <div className="card__information">
                <p className="card__information__value">{value}{unitOfMeasure}</p>
                <p className="card__information__type">{type}</p>
            </div>
        </section>
    );
}

export default Card