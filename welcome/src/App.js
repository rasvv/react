import './App.sass'
import { useState } from 'react'
import MessageList from './Components/MessageList/MessageList'
import MessageInput from './Components/MessageInput/MessageInput'
import Message from './Components/Message/Message'
// import Meeting from './Components/Meeting/Meeting'

function App(props) {
	const [messageList, setMessageList] = useState([])
	const [name, setName] = useState('')

	const addMessage = (message, name) => {
		setMessageList(messageList => [...messageList, { text: message, author: name, curtime: new Date().toLocaleTimeString() }])
	}

	const AddName = (name) => {
		setName(name)
		document.querySelectorAll('.toggled').forEach((comp) => comp.classList.toggle('hidden')) 
	}

	return (
		<div className="app">
			<header className="app-header header">
				My messenger
			</header>
			<div className="meeting-body toggled">
				Давайте познакомимся
				< MessageInput 
					updateData={AddName} 
					name={name} 
					placeholder="Введите Ваше имя"
				/>
			</div>
			<main className='app-main toggled hidden'>
				<div className="leftpanel">
					< Message 	name = { name } />
				</div>
				<div className="rightpanel">
					<div className="messagebox">
						< MessageList updateData={addMessage} array={messageList} />
					</div>
					<div>
						< MessageInput 
							updateData={addMessage} 
							name={name} 
							placeholder="Введите сообщение"
						/>
					</div>	
				</div>
			</main>
		</div>
	);
}

export default App;
