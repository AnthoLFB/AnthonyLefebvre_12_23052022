//Rechart
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

//CSS
import "../styles/components/ActivityTypeRadarChart.css"

function ActivityTypeRadarChart({activityInformation})
{
    return (
        <section className="activity-type-chart-container">
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="100%" data={activityInformation.data} margin={{top: 55, right: 55, left: 55, bottom: 55 }}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={kind => activityInformation.kind[kind]} stroke='white' fontSize={12}  tickLine={false}/>
                    <Radar name="activity" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8}/>
                </RadarChart>
             </ResponsiveContainer>
        </section>
      );
}

export default ActivityTypeRadarChart;
