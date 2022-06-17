//Recharts
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function DailyActivityChart({userActivity})
{
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="weight">{`${payload[0].value}kg`}</p>
              <p className="calories">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
        return null;
      };
      

      return (
        <section>
          <h1>Activité quotidienne</h1>
          <BarChart width={500} height={300} data={userActivity} barSize={7} margin={{top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis  axisLine={false} tickLine={false} dataKey="day" tickFormatter={day => day.split("-")[2]}/>
            <YAxis orientation="right"  axisLine={false} tickLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <CartesianGrid strokeDasharray="0 0 1" vertical={false} />
            <Bar dataKey="kilogram" fill="#282D30"  radius={[10, 10, 0, 0]}/>
            <Bar dataKey="calories" fill="#E60000"  radius={[10, 10, 0, 0]}/>
            <Legend align="right" iconSize="8" iconType="circle" payload={[{ value: "Poids (kg)" }, { value: "Calories brûlées (kCal)", color: "red" }]} verticalAlign="top" wrapperStyle={{paddingBottom: "10px"}}/> 
          </BarChart>
        </section>
      );
}

export default DailyActivityChart;