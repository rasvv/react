// import Message from './Message/Message'
import './App.sass'
import {useState}  from 'react'
import MessageList from './Components/MessageList/MessageList'
import MessageInput from './Components/MessageInput/MessageInput'

function App(props) {

	// const messages = useState
	const [messageList, setMessageList] = useState([
		// { text:"message1", author: "Валерий" },
		// { text:"message1-1", author: "robot" },
		// { text:"message2", author: "Валерий" },
		// { text:"message2-1", author: "robot" },
		// { text:"message3", author: "Валерий" },
		// { text:"message3-1", author: "robot" },
		// { text:"message4", author: "Валерий" }
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
				< MessageList array={messageList}/> 
			</div>
			<div>
				< MessageInput updateData={addMessage} array={messageList} func={setMessageList} name={props.name}/> 
			</div>
    </div>
  );
}


// function sayHi(person) {
// 	const name = person.name
// 	setTimeout(() => {
// 		alert("Hello, " + name)
// 	}, 3000)

// }

// let someone = {name: 'Dan'}
// sayHi(someone)


// someone = {name: 'Peter'}
// sayHi(someone)

// someone = {name: 'Nick'}
// sayHi(someone)

export default App;
