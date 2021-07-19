import "./MessageInput.sass"
import { useState } from 'react'
import {Button, TextField, Grid} from '@material-ui/core'

function MessageInput(props) {
	const { name } = props
	const [value, setValue] = useState('');

	const onchange = (e) => {
		setValue(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			handlerOnClick()
		}
	}

	const handlerOnClick = () => {
		props.updateData(value, name)
		setValue('')	
	}

	return (
		<div className="messageinput">
			<Grid container>
				<Grid item xs={8}>
					<TextField 
						id="standard-search" 
						label={ props.placeholder } 
						value={value} 
						onKeyDown={onkeydown} 
						onChange={onchange} 
						autoFocus
					/>					
				</Grid>
				<Grid item xs={4}>
					<Button 
						variant="contained" 
						color="primary"
						size="large"
						onClick={handlerOnClick}
					>
						Отправить
					</Button>					
				</Grid>
			</Grid>


		</div>
	)
}

export default MessageInput



