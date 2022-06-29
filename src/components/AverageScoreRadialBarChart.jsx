//Recharts
import { PieChart, Pie, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/AverageScoreRadialBarChart.css";
import  "../styles/responsive/components/AverageScoreRadialBarChart.css";

function AverageScoreRadialBarChart({userScore})
{
    let score = 0;

    if(userScore.todayScore === undefined)
    {
      score = userScore.score
    }
    else
    {
      score = userScore.todayScore;
    }

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

AverageScoreRadialBarChart.propTypes = {
  userScore: PropTypes.shape({

      id: PropTypes.number,

      keyData: PropTypes.shape({
        calorieCount: PropTypes.number,
        proteinCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number,
      }),

      todayScore: PropTypes.number,

      score: PropTypes.number,

      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
      })
    })
}

export default AverageScoreRadialBarChart