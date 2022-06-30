//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';

/**
 * React component that displays the content of the page Profil.
 * @returns {HTMLElement} return the content of the page.
 */
function Profil() {
  return (
    <React.Fragment>
       <Header/>
       <SidewaysNavbar/>
    </React.Fragment>
  );
}

export default Profil;
