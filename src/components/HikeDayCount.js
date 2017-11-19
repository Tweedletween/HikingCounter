import { PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const HikeDayCount = ({total=50, sunny=10, backcountry=15, goal=90}) => ({
  render() {
    return (
      <div className='hike-day-count'>
        <div className='total-days'>
          <span>{total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className='sunny-days'>
          <span>{sunny}</span>
            <Sunny />
          <span>days</span>
        </div>
        <div className='backcountry-days'>
          <span>{backcountry}</span>
            <Terrain />
          <span>hiking day</span>
        </div>
        <div>
          <span>
            {calGoalProgress(total, goal)}
          </span>
        </div>
      </div>
    )
  }
})

/*HikeDayCount.defaultProps = {
  total: 50,
  sunny: 10,
  backcountry: 15,
  goal: 80
}*/

HikeDayCount.propTypes = {
  total: PropTypes.number,
  sunny: PropTypes.number,
  backcountry: PropTypes.number,
	goal: PropTypes.number
}
