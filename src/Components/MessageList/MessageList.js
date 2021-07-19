import './messagelist.sass'
import React from 'react'


function MessageList(props) {
	const messageList = props.array

	// const autoscroll = () => {
	// 	var block = document.getElementsByClassName("messagebox")[0];
	// 	block.scrollTop = block.scrollHeight;
	// }

	React.useEffect(() => {
		if (messageList.length > 0) {
			let mes = messageList[messageList.length - 1]
			if (mes['author'] !== 'robot')
				setTimeout(() => {
					props.updateData(mes['text'].split('').reverse().join(''), 'robot')
				}, 1500)
		}
		// autoscroll()
	})

	return (
		messageList.map((message) =>
			<div key={ props.date } className={message.author === "robot" ? "mes left" : "mes"}>
				<big>{message.text}</big>
				<br />
				<small>{message.author}  {message.curtime}</small>
			</div>
		)
	)
}

export default MessageList;
