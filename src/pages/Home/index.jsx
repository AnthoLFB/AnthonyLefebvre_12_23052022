//React
import React, { useEffect, useState } from 'react';

//Composants
import Header from '../../components/Header';
import SidewaysNavbar from '../../components/SidewaysNavbar';
import UserIdentity from '../../components/UserIdentity';
import DailyActivityChart from '../../components/DailyActivityChart';
import AverageSessionTimeChart from '../../components/AverageSessionTimeChart';
import ActivityTypeRadarChart from '../../components/ActivityTypeRadarChart';
import AverageScoreRadialBarChart from '../../components/AverageScoreRadialBarChart';
import Card from '../../components/Card';

//Classes
import {createUserRepository} from '../../repositories/repository_factory';

//Images
import flame from "../../assets/images/flame.svg";
import chicken from "../../assets/images/chicken.svg"
import apple from "../../assets/images/apple.svg"
import cheeseburger from "../../assets/images/cheeseburger.svg"

//Css
import "../../styles/page/Home.css";

function Home() {

  const [userPersonalData, setUserPersonalData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessionTime, setUserAverageSessionTime] = useState({});
  const [userActivityType, setUserActivityType] = useState({});
  const [isDataLoading, setStatement] = useState(false); 

  useEffect(() => {

    const userId = 12

    //Recovery of personal data about the user
    const userRepository = createUserRepository();
    
    Promise.all([userRepository.getUserById(userId), userRepository.getUserActivity(userId), userRepository.getUserAverageTimeSession(userId), userRepository.getUserActivityType(userId)])
    .then((dataReceived) => {
      setUserPersonalData(dataReceived[0].data.data);
      setUserActivity(dataReceived[1].data.data.sessions);
      setUserAverageSessionTime(dataReceived[2].data.data.sessions);
      setUserActivityType(dataReceived[3].data.data);
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

  console.log(userPersonalData);
  console.log(userActivity);
  console.log(userAverageSessionTime);
  console.log(userActivityType);

  //Once the data has been loaded, then the content can be displayed
  return (
    <React.Fragment>
        <Header/>
        <SidewaysNavbar/>
        <main>
          <UserIdentity name={userPersonalData.userInfos.firstName}/>
          
          <section className='main__data'>
            <section className='main__data__charts'>
              <DailyActivityChart userActivity={userActivity}/>
              <div className='main__data__charts__group'>
                <AverageSessionTimeChart sessionsInformation={userAverageSessionTime}/>
                <ActivityTypeRadarChart activityInformation={userActivityType}/>
                <AverageScoreRadialBarChart userScore={userPersonalData}/>
              </div>
            </section>
            <section className='main__data__cards'>
              <Card color={"red"} icon={flame} type={"Calories"} value={userPersonalData.keyData.calorieCount} unitOfMeasure={"kCal"}/>
              <Card color={"blue"} icon={chicken} type={"Proteines"} value={userPersonalData.keyData.proteinCount} unitOfMeasure={"g"}/>
              <Card color={"yellow"} icon={apple} type={"Glucides"} value={userPersonalData.keyData.carbohydrateCount} unitOfMeasure={"g"}/>
              <Card color={"pink"} icon={cheeseburger} type={"Lipides"} value={userPersonalData.keyData.lipidCount} unitOfMeasure={"g"}/>
            </section>
          </section>
        </main>
    </React.Fragment>
  );
}

export default Home;
