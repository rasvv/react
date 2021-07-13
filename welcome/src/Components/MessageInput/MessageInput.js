import "./MessageInput.sass";
import {useState} from 'react'

function MessageInput(props) {
	const { name } = props
	const [value, setValue] = useState('');

	const onchange = (e) => {
		setValue(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') { onclick() }
	}

	const onclick = () => {
		props.updateData(value, name)

	}

	return (
		<div className="messageinput">
			<input value={value} onKeyDown={onkeydown} onChange={onchange} placeholder="Введите сообщение"/>
			<button onClick={onclick}>Отправить</button>
		</div>		
	)
}

export default MessageInput



