import './App.sass'
import { useState } from 'react'
import MessageList from './Components/MessageList/MessageList'
import MessageInput from './Components/MessageInput/MessageInput'
import Message from './Components/Message/Message'
import Meeting from './Components/Meeting/Meeting'

function App(props) {
	const [messageList, setMessageList] = useState([])
	const [name, setName] = useState('')
	// let timenow = new Date().now.toLocalSting()

	const addMessage = (message, name) => {
		setMessageList(messageList => [...messageList, { text: message, author: name, curtime: new Date().toLocaleTimeString() }])
	}

	const AddName = (name) => {
		setName(name)
		const meetingdlg = document.querySelector('.meeting-body')
		const appmain = document.querySelector('.app-main')
		meetingdlg.classList.toggle('hidden')
		appmain.classList.toggle('hidden')
	}

	return (
		<div className="app">
			<header className="app-header header">
				My messenger
			</header>
			<div className="meeting-body">
				Давайте познакомимся
				< Meeting updateName={AddName} />
			</div>
			<main className='app-main hidden'>
				<div className="leftpanel">
					< Message 	text = {
						<div>
							<h3 className="h3">Добро пожаловать, <span>{name}</span>. Меня зовут Robot</h3>
							<h4 className="h4">Давай немного поболтаем! <br/> Я умею читать слова задом-наперед.</h4>
						</div>} 
					/>
				</div>
				<div className="rightpanel">
					<div className="messagebox">
						< MessageList updateData={addMessage} array={messageList} />
					</div>
					<div>
						< MessageInput updateData={addMessage} name={name} />
					</div>	
				</div>
			</main>
		</div>
	);
}

export default App;
