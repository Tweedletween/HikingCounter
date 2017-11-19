import Terrain from 'react-icons/lib/md/terrain'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const HikeDayRow = ({resort, date, sunny, backcountry}) => (
  <tr>
    <td>
      {date}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(sunny) ? <Sunny/> : null}
    </td>
    <td>
      {(backcountry) ? <Terrain/> : null}
    </td>
  </tr>
)

HikeDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sunny: PropTypes.bool,
  backcountry: PropTypes.bool
}
