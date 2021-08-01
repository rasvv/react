import React from 'react'
import MessageList from '../MessageList/MessageList'
// import { useState } from 'react'
import MessageInput from '../MessageInput/MessageInput'
import { USER } from '../Constants'
import { useParams } from 'react-router'
// import { ChatContext } from '../App/App'
// import { useContext } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addMessage } from '../../store/messages/actions'


function Chat(props) {
	const { chatId } = useParams()
	const {currentChat} = useSelector((state) => state.chats)
	const messages = useSelector((state) => state.messages[chatId] || [])
	// const currentChat = useSelector((state) => state.messages.currentChat)
	
	const dispatch = useDispatch()

	const onAddMessage = (message, author) => {
		dispatch(
			addMessage(chatId, {
				id: `${Date.now()}`,
				author: author,
				text: message				
			})
		)
	}

	
	React.useEffect(() => {
		let mes = messages[messages.length - 1]		
		if (mes) {
			console.log(mes.author, currentChat.author);
			if (mes.author !== currentChat.author)
				setTimeout(() => {
					onAddMessage(mes['text'].split('').reverse().join(''), currentChat.author)
				}, 1500)
		}
	})

	// const isChatExists = React.useMemo(
	// 	() => checkChatExists(contextProps),
	// 	[checkChatExists, contextProps]
	// )

	// if (!isChatExists) {
	// 	return <Redirect to="/chats" />
	// }

	return (
		<div className='chat'>
			<p>{currentChat.author}</p>
			<div className='messagebox'>
				{messages?.length ? (
					messages.map((message) => (
						<MessageList 
							className={message.author !== `${USER.me}` ? "mes left" : "mes"}
							key={ message.id }
							text={message.text}
							author={message.author}
							date={message.date}
						/>
					))
				) : null }
			</div>			
			<MessageInput
				updateData={onAddMessage} 
				placeholder="Введите сообщение"
			/>
		</div>
	)
}

export default Chat