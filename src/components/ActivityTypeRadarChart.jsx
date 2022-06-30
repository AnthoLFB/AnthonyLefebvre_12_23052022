//Recharts
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

//Proptypes
import PropTypes from 'prop-types';

//CSS
import "../styles/components/ActivityTypeRadarChart.css";
import  "../styles/responsive/components/ActivityTypeRadarChart.css";

/**
 * React component returning an HTML section with a radar chart
 * @param {Object} activityInformation Object retrieved via a promise. This object contains the user's id, the types of activities and the personal data of the user according to the types of activities he has done.
 * @returns {HTMLElement} React component - Returns an HTML element, with a graphic containing the information passed in parameter. This graph is about the user's activity types.
 */
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

//Propstypes
ActivityTypeRadarChart.propTypes = {
    //Objet
    activityInformation: PropTypes.shape({
        //user's id
        userId: PropTypes.number,
        //name of the activity
        kind: PropTypes.objectOf(PropTypes.string),
        //personal data of the user about the type of activity
        data: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.number,
          }))
      }),
}

export default ActivityTypeRadarChart;
