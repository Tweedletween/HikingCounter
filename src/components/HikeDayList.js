import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { HikeDayRow } from './HikeDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const HikeDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/sunny|backcountry/)) ?
        days : days.filter(day => day[filter])
  return (
    <div className='hike-day-list'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Sunny</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to='/list-days'>
                All days
              </Link>
              <Link to='/list-days/sunny'>
                Sunny Days
              </Link>
              <Link to='/list-days/backcountry'>
                Backcountry Days
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <HikeDayRow key={i}
                       {...day}/>
            )}
        </tbody>
      </table>
    </div>
  )
}

/*HikeDayList.propTypes = {
  days: PropTypes.array
}*/

HikeDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error(
        "HikeDayList should be an array"
      )
    } else if(!props.days.length) {
      return new Error(
        "HikeDayList must have at least one record"
      )
    } else {
      return null
    }
  }
}
