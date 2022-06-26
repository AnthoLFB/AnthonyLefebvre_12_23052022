//Recharts
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/DailyActivityChart.css";

function DailyActivityChart({userActivity})
{
  console.log(userActivity);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-daily-chart">
          <p className="custom-tooltip-daily-chart__weight">{`${payload[0].value}kg`}</p>
          <p className="custom-tooltip-daily-chart__calories">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };
    
  return (
    <section className="daily-activity-chart-container">
      <h1 className="daily-activity-chart-container__title">Activité quotidienne</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={userActivity} barSize={8} margin={{top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis  axisLine={false} tickLine={false} dataKey="day" tickFormatter={day => day.split("-")[2]}/>
          <YAxis orientation="right"  axisLine={false} tickLine={false}/>
          <Tooltip content={<CustomTooltip />}/>
          <CartesianGrid strokeDasharray="0 0 1" vertical={false} />
          <Bar dataKey="kilogram" fill="#282D30"  radius={[8, 8, 0, 0]}/>
          <Bar dataKey="calories" fill="#E60000"  radius={[8, 8, 0, 0]}/>
          <Legend align="right" iconSize="8" iconType="circle" payload={[{ value: "Poids (kg)" }, { value: "Calories brûlées (kCal)", color: "red" }]} verticalAlign="top" wrapperStyle={{paddingBottom: "15px"}}/> 
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

DailyActivityChart.propTypes = {
  userActivity: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    kilogram: PropTypes.number, 
    calories: PropTypes.number, 
  }))
}


export default DailyActivityChart;