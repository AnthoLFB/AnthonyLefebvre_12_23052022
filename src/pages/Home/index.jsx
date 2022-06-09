//React
import React, { useEffect, useState } from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';
import UserIdentity from '../../components/UserIdentity';

//Classes
import {createUserRepository} from '../../repositories/repository_factory'

function Home() {

  const [userPersonalData, setUserPersonalData] = useState({});
  const [isDataLoading, setStatement] = useState(false); 

  useEffect(() => {

    //Recovery of personal data about the user
    const userRepository = createUserRepository();
    userRepository.getUserById(12)
    .then((data) => {setUserPersonalData(data.data.USER_MAIN_DATA);})
    .then(() => {setStatement(true)});
  }, []);

  //As long as the data are not loaded, a loader is displayed on the screen
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

  //Once the data has been loaded, then the content can be displayed
  return (
    <React.Fragment>
        <Header/>
        <SidewaysNavbar/>
        <main>
          <UserIdentity name={userPersonalData.userInfos.firstName}/>
        </main>
    </React.Fragment>
  );
}

export default Home;
