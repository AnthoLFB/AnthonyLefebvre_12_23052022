//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';

function Home() {
  return (
    <React.Fragment>
        <Header/>
        <SidewaysNavbar/>
    </React.Fragment>
  );
}

export default Home;
