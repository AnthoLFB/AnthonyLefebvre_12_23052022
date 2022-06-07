//React
import React, { useEffect, useState } from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';
import UserIdentity from '../../components/UserIdentity';

//Classes
import {repositoryFactory} from '../../repositories/repository_factory';

function Home() {

  const [userData, setUserData] = useState({});
  const [isDataLoading, setStatement] = useState(false); 

  useEffect(() => {
    repositoryFactory(12)
   .then(setUserData)
   .then(() => {setStatement(true)});
  }, []);

  if(!isDataLoading)
  {
    return (
      <React.Fragment>
          <Header/>
          <SidewaysNavbar/>
          <main>
            <p>Loading ...</p>
          </main>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
        <Header/>
        <SidewaysNavbar/>
        <main>
          <UserIdentity name={userData[0].data.USER_MAIN_DATA.userInfos.firstName}/>
        </main>
    </React.Fragment>
  );
}

export default Home;
