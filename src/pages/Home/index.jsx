//React
import React from 'react';

//Links
import { NavLink } from "react-router-dom";

//Components
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';

//Css
import "../../styles/page/Home.css";

/**
 * React component that displays the content of the page Setting.
 * @returns {HTMLElement} return the content of the page.
 */
function Home() {
  return (
    <React.Fragment>
       <Header/>
       <SidewaysNavbar/>
       <main>
          <h1 className='title'>Liens utiles - debbug</h1>
          <ul className="test-links-list">
              <li className="test-links-list__item"><NavLink className="test-links-list__item__link" to="/profil/12">TEST - Utilisateur id n°12</NavLink></li>
              <li className="test-links-list__item"><NavLink className="test-links-list__item__link" to="/profil/18">TEST - Utilisateur id n°18</NavLink></li>
          </ul>
       </main>
    </React.Fragment>
  );
}

export default Home;

