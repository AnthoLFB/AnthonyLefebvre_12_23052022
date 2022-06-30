//CSS
import "../styles/components/UserIdentity.css";

//Proptypes
import PropTypes from 'prop-types';

/**
 * React component allowing to return an HTML section. This section displays the name of the user passed in parameter.
 * @param {string} name User's name
 * @returns {HTMLElement} React component - Returns an HTML element. The section contains the user's identity and a catchphrase.
 */
function UserIdentity({name})
{
    return (
        <section className="userIdentity">
            <h1 className="userIdentity__title">Bonjour <span className="userIdentity__title__name">{name}</span></h1>
            <p className="userIdentity__catchphrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
}

//Proptypes
UserIdentity.propTypes = {
    name: PropTypes.string,
}

export default UserIdentity;