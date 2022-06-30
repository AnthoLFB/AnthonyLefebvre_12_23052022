//Liens
import { NavLink } from "react-router-dom";

//Images
import logo from "../assets/images/logo.svg";

//CSS
import '../styles/components/Header.css';

/**
 * React component that returns the Header of the site. The Header is composed of the logo, and the navigation bar.
 * @returns {HTMLElement} React component - Returns an HTML section with the Header of the site. The Header is composed of the logo, and the navigation bar.
 */
function Header()
{
    return (
        <header className="header">
            <img className="header__image" src={logo} alt="SportSee"/>
            <nav className="header__navbar">
                <ul className="header__navbar__list">
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/">Accueil</NavLink></li>
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/profil">Profil</NavLink></li>
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/setting">Réglage</NavLink></li>
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/community">Communauté</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;