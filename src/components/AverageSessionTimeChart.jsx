//Recharts
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/AverageSessionTimeChart.css";
import "../styles/responsive/components/AverageSessionTimeChart.css";

/**
 * React component allowing to return an HTML section with the line chart containing the average time of the user's sessions
 * @param {Object} sessionsInformation Object obtained thanks to a promise. It contains a table with the duration of the session, and the day of the week concerned.
 * @returns {HTMLElement} React component - Returns an HTML element, with a graph containing the information passed in parameter. This graph is about the average time of the user's sessions over a week.
 */
function AverageSessionTimeChart({sessionsInformation})
{
  const days = ['L' ,'M', 'M', 'J' , 'V', 'S','D'];

  //Allows you to modify the content of the graph legend when hovering
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

//Propstypes
AverageSessionTimeChart.propTypes = {
  //Object
  sessionsInformation: PropTypes.arrayOf(PropTypes.shape({
    //Day of the week
    day: PropTypes.number,
    //Session time
    sessionLength: PropTypes.number, 
  }))
}

export default AverageSessionTimeChart;