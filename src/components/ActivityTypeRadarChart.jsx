//Rechart
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';


//CSS
import "../styles/components/ActivityTypeRadarChart.css";
import  "../styles/responsive/components/ActivityTypeRadarChart.css";

function ActivityTypeRadarChart({activityInformation})
{
    return (
        <section className="activity-type-chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={activityInformation.data} margin={{right: 40, left: 40}}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={kind => activityInformation.kind[kind]} stroke='white' fontSize={11}  tickLine={false}/>
                    <Radar name="activity" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8}/>
                </RadarChart>
            </ResponsiveContainer>
        </section>
      );
}

ActivityTypeRadarChart.propTypes = {
    activityInformation: PropTypes.shape({
        userId: PropTypes.number,
        kind: PropTypes.objectOf(PropTypes.string),
        data: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.number,
          }))
      }),
}

export default ActivityTypeRadarChart;
