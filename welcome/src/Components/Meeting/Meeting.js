import './Meeting.sass'
import { useState } from 'react'

function Meeting(props) {
	const { name } = props
	const [value, setValue] = useState('');

	const onchange = (e) => {
		setValue(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			onclick()
		}
	}

	const onclick = () => {
		props.updateName(value)
		// setValue('')
	}

	return (
		<div className="meeting">
			<input 
				className="meeting-inp"
				value={value} 
				onKeyDown={onkeydown} 
				onChange={onchange} 
				placeholder="Введите Ваше имя" 
			/>
			<button 
				onClick={onclick}
				className="meeting-btn"
			>
					Отправить
			</button>
		</div>
	)	
}

export default Meeting;
