import { PropTypes, Component } from 'react'

export const AddDayForm = ({ resort, date, sunny, backcountry, onNewDay }) => {

	let _resort, _date, _sunny, _backcountry

	const submit = (e) => {
			e.preventDefault()
			onNewDay({
        resort: _resort.value,
        date: _date.value,
        sunny: _sunny.checked,
        backcountry: _backcountry.checked
      })
      _resort.vlaue = ''
      _date.value = ''
      _sunny.checked = false
      _backcountry.checked = false
	}

	return (
		<form onSubmit={submit} className='add-day-form'>

			<label htmlFor='resort'>Resort Name</label>
			<input id='resort'
				   type='text'
				   required
				   defaultValue={resort}
					 ref={input => _resort = input}/>

			<label htmlFor='date'>Date</label>
			<input id='date'
				   type='date'
				   required
				   defaultValue={date}
					 ref={input => _date = input}/>

			<div>
				<input id='sunny'
					   type='checkbox'
					   defaultChecked={sunny}
						 ref={input => _sunny = input}/>
				<label htmlFor='sunny'>Sunny Day</label>
			</div>

			<div>
				<input id='backcountry'
					   type='checkbox'
					   defaultChecked={backcountry}
						 ref={input => _backcountry = input}/>
				<label htmlFor='backcountry'>
					Backcountry Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	resort: 'Yosemeti',
	date: '2017-02-12',
	sunny: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	sunny: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
