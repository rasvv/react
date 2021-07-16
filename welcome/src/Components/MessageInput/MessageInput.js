import "./MessageInput.sass";
import { useState } from 'react'

function MessageInput(props) {
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
		props.updateData(value, name)
		setValue('')	
	}

	return (
		<div className="messageinput">
			<input 
				className="messageinput-inp"
				value={value} 
				onKeyDown={onkeydown} 
				onChange={onchange} 
				placeholder={ props.placeholder } 
			/>
			<button 
				onClick={onclick}
				className="messageinput-btn"
			>
					Отправить
			</button>
		</div>
	)
}

export default MessageInput



