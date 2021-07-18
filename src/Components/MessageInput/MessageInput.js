import "./MessageInput.sass"
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
			{/* <TextField id="standard-search" label="Search field" type="search" /> */}
  		<TextField 
				id="standard-search" 
				label={ props.placeholder } 
				// variant="outlined"
				value={value} 
				onKeyDown={onkeydown} 
				onChange={onchange} 
				// placeholder={ props.placeholder } 
				autoFocus
			/>

			{/* <input 
				className="messageinput-inp"
				value={value} 
				onKeyDown={onkeydown} 
				onChange={onchange} 
				placeholder={ props.placeholder } 
			/> */}
			<Button 
				variant="contained" 
				color="primary"
				size="large"
				onClick={onclick}
			>
				Отправить
			</Button>
			{/* <button 
				onClick={onclick}
				className="messageinput-btn"
			>
					Отправить
			</button> */}
		</div>
	)
}

export default MessageInput



