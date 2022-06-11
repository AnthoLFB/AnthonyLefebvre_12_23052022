//React
import React, { useEffect, useState } from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';
import UserIdentity from '../../components/UserIdentity';
import DailyActivityChart from '../../components/DailyActivityChart';

//Classes
import {createUserRepository} from '../../repositories/repository_factory'

function Home() {

  const [userPersonalData, setUserPersonalData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [isDataLoading, setStatement] = useState(false); 

  useEffect(() => {


    //Recovery of personal data about the user
    const userRepository = createUserRepository();
    
    
    Promise.all([userRepository.getUserById(12), userRepository.getUserActivity(12)])
    .then((dataReceived) => {
      setUserPersonalData(dataReceived[0].data.USER_MAIN_DATA);
      setUserActivity(dataReceived[1].data.USER_ACTIVITY);
    })
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

  console.log(userActivity);

  //Once the data has been loaded, then the content can be displayed
  return (
    <React.Fragment>
        <Header/>
        <SidewaysNavbar/>
        <main>
          <UserIdentity name={userPersonalData.userInfos.firstName}/>
          <DailyActivityChart/>
        </main>
    </React.Fragment>
  );
}

export default Home;
