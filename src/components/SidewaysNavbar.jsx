//Liens
import { NavLink } from "react-router-dom";

//Images
import yogaLogo from "../assets/images/yoga.svg";
import swimmingLogo from "../assets/images/swimming.svg";
import bikeLogo from "../assets/images/bike.svg";
import weightLiftingLogo from "../assets/images/weightLifting.svg";

//CSS
import "../styles/components/SidewaysNavbar.css"

/**
 * React component that returns the menu on the side of the site.
 * @returns {HTMLElement} React component - This React component returns the menu on the side of the site. We find in this menu the copyrights, a navigation bar with icons.
 */
function SidewaysNavbar()
{
    return (
        <section className="side-menu">
            <nav className="side-menu__navbar" role="navigation" aria-label="Navigation secondaire">
                <ul className="side-menu__navbar__list">
                    <li className="side-menu__navbar__list__item"><NavLink className="side-menu__navbar__list__item__link" to="#"><img className="side-menu__navbar__list__item__link__image" src={yogaLogo} alt="Yoga"/></NavLink></li>
                    <li className="side-menu__navbar__list__item"><NavLink className="side-menu__navbar__list__item__link" to="#"><img className="side-menu__navbar__list__item__link__image" src={swimmingLogo} alt="Natation"/></NavLink></li>
                    <li className="side-menu__navbar__list__item"><NavLink className="side-menu__navbar__list__item__link" to="#"><img className="side-menu__navbar__list__item__link__image" src={bikeLogo} alt="Vélo"/></NavLink></li>
                    <li className="side-menu__navbar__list__item"><NavLink className="side-menu__navbar__list__item__link" to="#"><img className="side-menu__navbar__list__item__link__image" src={weightLiftingLogo} alt="Musculation"/></NavLink></li>
                </ul>
            </nav>
            <p className="side-menu__credit">Copyright, SportSee 2022</p>
        </section>
    )
}

export default SidewaysNavbar;