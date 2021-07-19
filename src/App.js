import './App.sass'
import { useState } from 'react'
import MessageList from './Components/MessageList/MessageList'
import MessageInput from './Components/MessageInput/MessageInput'
import Message from './Components/Message/Message'
import ChatsList from './Components/ChatsList/ChatsList'
// import Meeting from './Components/Meeting/Meeting'
// import Grid from '@material-ui/core/Grid';
import {Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

function App(props) {
	const classes = useStyles()
	const [messageList, setMessageList] = useState([])
	const [name, setName] = useState('')

	const addMessage = (message, name) => {
		setMessageList(messageList => [...messageList, { text: message, author: name, curtime: new Date().toLocaleTimeString() }])
	}

	const addName = (name) => {
		setName(name)
		document.querySelectorAll('.toggled').forEach((comp) => comp.classList.toggle('hidden')) 
	}


	return (
		<div className="app">
			<header className="app-header header">
				My messenger
			</header>
			<main  className={classes.root}>
				<Grid container >
					<Grid item xs={12}>
						< Message 	name = { name } />
					</Grid>
					<Grid item xs={2}/>
					<Grid item xs={4} >
						<Typography variant="h6" className={classes.title}>
							Список чатов
						</Typography>
						<ChatsList updateData={ addName }/>
					</Grid>
					<Grid item xs={4} >
						<Grid container spacing={2}>	
							<Grid item xs={12} className="messagebox">
								< MessageList updateData={addMessage} array={messageList} />
							</Grid>
							<Grid item xs={12} >
								< MessageInput 
									updateData={addMessage} 
									name={name} 
									placeholder="Введите сообщение"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export default App;
