import './messagelist.sass'
import React from 'react'

function MessageList(props) {
	const messageList = props.array

	React.useEffect(() =>{
		if (messageList.length > 0) {
		 	let mes = messageList[messageList.length-1]
	  	if (mes['author'] !== 'robot') 
			setTimeout(() => {
				props.updateData('Robot ответил', 'robot')
			}, 1500)
		}
	}) 

	return (
		messageList.map((message) => 
			<div className={ message.author ==="robot" ? "mes left": "mes" }>
				<b>{message.text}</b>
				<br/>
				<span>{message.author}</span>
			</div>				
		)
	)
}

export default MessageList;