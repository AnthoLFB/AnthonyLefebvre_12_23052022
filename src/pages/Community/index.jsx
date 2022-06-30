//React
import React from 'react';

//Components
import Header from "../../components/Header";
import SidewaysNavbar from '../../components/SidewaysNavbar';

/**
 * React component that displays the content of the page Community.
 * @returns {HTMLElement} return the content of the page.
 */
function Community() {
  return (
    <React.Fragment>
       <Header/>
       <SidewaysNavbar/>
    </React.Fragment>
  );
}

export default Community;
