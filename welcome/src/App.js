import './App.sass'
import {useState}  from 'react'
import MessageList from './Components/MessageList/MessageList'
import MessageInput from './Components/MessageInput/MessageInput'

function App(props) {
	const [messageList, setMessageList] = useState([

	])

	const addMessage = (message, name) => {
		setMessageList(messageList => [...messageList, { text: message, author: name }])
	}

	return (
    <div className="App">
      <header className="App-header header">
				My messenger
      </header>
			<div className="messagebox">
				< MessageList updateData={addMessage} array={messageList}/> 
			</div>
			<div>
				< MessageInput updateData={addMessage} name={props.name}/> 
			</div>
    </div>
  );
}

export default App;
