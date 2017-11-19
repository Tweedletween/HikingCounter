import { Component } from 'react'
import { HikeDayList } from './HikeDayList'
import { HikeDayCount } from './HikeDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allHikeDays: [
        {
          resort: 'Squaw Valley',
          date: '2016-01-02',
          sunny: true,
          backcountry: false
        },
        {
          resort: 'Kirkwood',
          date: '2016-03-28',
          sunny: false,
          backcountry: false
        },
        {
          resort: 'Squaw Valley',
          date: '2016-01-02',
          sunny: false,
          backcountry: true
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allHikeDays: [
        ...this.state.allHikeDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    const { allHikeDays } = this.state
    return allHikeDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className='app'>
        <Menu/>
        {(this.props.location.pathname==='/') ?
          <HikeDayCount total={this.countDays()}
                       sunny={this.countDays('sunny')}
                       backcountry={this.countDays('backcountry')}/> :
          (this.props.location.pathname==='/add-day') ?
            <AddDayForm onNewDay={this.addDay}/> :
            <HikeDayList days={this.state.allHikeDays}
                        filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
