//Recharts
import { PieChart, Pie, ResponsiveContainer} from "recharts";

//CSS
import "../styles/components/AverageScoreRadialBarChart.css"

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
    
    return (
        <section className="score-chart-container">
            <h1 className="score-chart-container__title">Score</h1>
            <div className="score-chart-container__result">
              <p className="score-chart-container__result__text"><span className="score-chart-container__result__score">{score * 100}%</span> de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={data} dataKey="value" cornerRadius={40} innerRadius={80} outerRadius={90} startAngle={230} endAngle={-230}/>
              </PieChart>
            </ResponsiveContainer>
        </section>
      );


    
}

export default AverageScoreRadialBarChart