//Recharts
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/AverageSessionTimeChart.css";
import "../styles/responsive/components/AverageSessionTimeChart.css";

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
          
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={sessionsInformation} margin={{top: 8, right: 8, left: 8, bottom: 0}}>
                <XAxis dataKey="day" stroke="#fff" dy={5} axisLine={false} tickLine={false} tickFormatter={day => days[day-1]}/>
                <Tooltip cursor={false} content={<CustomTooltip />}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }}/>
            </LineChart>
          </ResponsiveContainer>
      </section>
    );
}


AverageSessionTimeChart.propTypes = {
  sessionsInformation: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number, 
  }))
}

export default AverageSessionTimeChart;