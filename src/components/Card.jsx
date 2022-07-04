//CSS
import "../styles/components/Card.css"

//Proptypes
import PropTypes from 'prop-types';

/**
 * React component allowing to return an HTML section. This HTML section is displayed as a card and is modular. It can contain an icon, a specific color, a type as well as a value and a unit of measurement specified in parameter.
 * @param {string} color Color of the icon and the background.
 * @param {string} icon The icon as an image.
 * @param {string} type Type of nutrient displayed.
 * @param {int} value Value to be displayed.
 * @param {string} unitOfMeasure Unit of measure to be displayed behind the value.
 * @returns {HTMLElement} React component - Returns an HTML element. The section contains the user's key information.
 */
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

Card.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    unitOfMeasure: PropTypes.string
}
  

export default Card