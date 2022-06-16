//Recharts
import {LineChart, Line, XAxis, Tooltip} from "recharts";

//CSS
import "../styles/components/AverageSessionTimeChart.css";

function AverageSessionTimeChart({sessionsInformation})
{
  const days = ['L' ,'M', 'M', 'J' , 'V', 'S','D'];

  const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        );
      }
    
      return null;
    };

  return (
      <section className="average-chart-container">
          <h1 className="average-chart-container__title">Durée moyenne des sessions</h1>
          <LineChart width={250} height={200} data={sessionsInformation} margin={{top: 10, right: 10, left: 10, bottom: 0}}>
              <XAxis dataKey="day" stroke="#fff" dy={5} axisLine={false} tickLine={false} tickFormatter={day => days[day-1]}/>
              <Tooltip content={<CustomTooltip />}/>
              <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }}/>
          </LineChart>
      </section>
    );
}

export default AverageSessionTimeChart;