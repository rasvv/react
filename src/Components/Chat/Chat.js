import React from 'react'
import MessageList from '../MessageList/MessageList'
import { useState } from 'react'
import MessageInput from '../MessageInput/MessageInput'
import { USER } from '../Constants'
import { Redirect, useParams } from 'react-router'

function Chat(props) {
	
	const [messageList, setMessageList] = useState([])

	const {
		currentChat,
		checkChatExists
	} = props

	const { chatId } = useParams()

	const addMessage = (message, name) => {
		setMessageList(messageList => [...messageList, { text: message, author: name, date: new Date().toLocaleTimeString() }])
	}
	
	React.useEffect(() => {
		if (messageList.length > 0) {
			let mes = messageList[messageList.length - 1]
			if (mes['author'] !== `${currentChat.author}`)
				setTimeout(() => {
					addMessage(mes['text'].split('').reverse().join(''), `${currentChat.author}`)
				}, 1500)
		}
	})

	const isChatExists = React.useMemo(
		() => checkChatExists(chatId),
		[checkChatExists, chatId]
	)

	if (!isChatExists) {
		return <Redirect to="/chats" />
	}

	return (
		<div className='chat'>
			<p>{currentChat.author}</p>
			<div className='messagebox'>
				{messageList?.length ? (
					messageList.map((message, index) => (
						<MessageList 
							className={message.author !== `${USER.me}` ? "mes left" : "mes"}
							key={ index }
							text={message.text}
							author={message.author}
							date={message.date}
						/>
					))
				) : null }
			</div>			
			<MessageInput
				updateData={addMessage} 
				placeholder="Введите сообщение"
			/>
		</div>
	)
}

export default Chat