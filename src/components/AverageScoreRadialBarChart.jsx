//Recharts
import { PieChart, Pie, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/AverageScoreRadialBarChart.css";
import  "../styles/responsive/components/AverageScoreRadialBarChart.css";


/**
 * React component allowing to return an HTML section with the pie chart containing the user's goal in percentage
 * @param {Object} userScore Object obtained thanks to a promise. It contains the user's id, his key data, his daily score and his identity.
 * @returns {HTMLElement} React component - Returns an HTML element, with a graphic containing the information passed in parameter. This graph is about the user's activity types.
 */
function AverageScoreRadialBarChart({userScore})
{
    //The recovered objects do not have the same name, this condition is necessary to recover a value 
    let score = userScore.todayScore === undefined ? userScore.score:userScore.todayScore;

    let userValue = score;
    let maxValue = 1 - score;

    const data = 
    [
      { name: "userValue", value: userValue, fill: "#FF0000" },
      { name: "valueMax", value: maxValue, fill: "#FFFFFF" }
    ];

    const background = 
    [
      { name: "valueMax", value: maxValue, fill: "#ffffff" }
    ];
    
    return (
        <section className="score-chart-container">
            <h1 className="score-chart-container__title">Score</h1>

            <div className="score-chart-container__content">
              <div className="score-chart-container__result">
                <p className="score-chart-container__result__text"><span className="score-chart-container__result__score">{score * 100}%</span> de votre objectif</p>
              </div>

              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Pie data={data} dataKey="value" cornerRadius={40} innerRadius="80%" outerRadius="90%" startAngle={230} endAngle={-230}/>
                  <Pie data={background} dataKey="value" cornerRadius={0} innerRadius="0%" outerRadius="80%" startAngle={230} endAngle={-230} isAnimationActive={false}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
        </section>
      );    
}

//Propstypes
AverageScoreRadialBarChart.propTypes = {
  //Object
  userScore: PropTypes.shape({

    //user's id
    id: PropTypes.number,

    //user's key data
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
    }),

    //Daily score
    todayScore: PropTypes.number,

    //Daily score version 2
    score: PropTypes.number,

    //user's identity
    userInfos: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    })
  })
}

export default AverageScoreRadialBarChart