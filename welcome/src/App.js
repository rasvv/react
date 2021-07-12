// import Message from './Message/Message'
import './App.sass'
import {useState}  from 'react'

function App(props) {

	// const messages = useState
	const [messages, setMessages] = useState([
		{ text:"message1", author: "Валерий" },
		{ text:"message1-1", author: "robot" },
		{ text:"message2", author: "Валерий" },
		{ text:"message2-1", author: "robot" },
		{ text:"message3", author: "Валерий" },
		{ text:"message3-1", author: "robot" }
	])

	function MessageList() { 
	
		return messages.map((message) => 
			<div>
				<div className={ message.author ==="robot" ? "mes left": "mes" }>
					{message.text}
				</div>			
			</div>
		)
	}

	setMessages(() => {
		messages.push({
			text: mestext,
			author: authorname
		})			

	// 	let mestext = 'dsfgs'
	// 	let authorname = props.name
	// 	return (
	// 		<div className="messageinput">
	// 			<div>Message4</div>
	// 			{/* <input>Message4</input> */}
	// 			<button >Click</button>
	// 		</div>
	// 	)
	// }

	return (
    <div className="App">
      <header className="App-header header">
				My first React App
      </header>
			{/* <Message 	text = {
				<div>
					<h3 className="h3">Добро пожаловать, мой друг, Карлсон!</h3>
					<h4 className="h4">Ну и ты, <span>{props.name}</span>, заходи!</h4>
				</div>}
			/> */}
			<div className="messagebox">
			messages.map((message) => 
				<div >
					<div className={ message.author ==="robot" ? "mes left": "mes" }>
						{message.text}
					</div>			
				</div>
			)
			</div>
			<div className="messageinput">
				<div>Message4</div>
				{/* <input>Message4</input> */}
				<button >Click</button>
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
