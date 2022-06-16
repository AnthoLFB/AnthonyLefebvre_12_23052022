//Rechart
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts";

//CSS
import "../styles/components/ActivityTypeRadarChart.css"

function ActivityTypeRadarChart({activityInformation})
{
    return (
        <section className="activity-type-chart-container">
            <RadarChart outerRadius="60%" width={320} height={320} data={activityInformation.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tickFormatter={kind => activityInformation.kind[kind]} stroke='white' fontSize={13}/>
                <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8}/>
            </RadarChart>
        </section>
      );
}

export default ActivityTypeRadarChart;
