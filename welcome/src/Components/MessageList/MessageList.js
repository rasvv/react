import './messagelist.sass'
import React from 'react'

function MessageList(props) {
	const messageList = props.array

	return (
		messageList.map((message) => 
		<div className={ message.author ==="robot" ? "mes left": "mes" }>
			<bold>{message.text}</bold>
			<br/>
			<span>{message.author}</span>
		</div>				
		)
	)
}

export default MessageList;