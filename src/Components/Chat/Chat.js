import React from 'react'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import { useParams } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import { addMessageThunk } from '../../store/messages/actions'
import { getChatsData } from '../../store/chats/selectors'
import { getMessagesData } from '../../store/messages/selectors'


function Chat() {
	const { chatId } = useParams()
	const { chatsList } = useSelector(getChatsData)
	
	const mmm = useSelector(getMessagesData)
	const messages = mmm[chatId] ? mmm[chatId] : []

	const currentChat = Object.values(chatsList).find((chat) => chat.id === chatId)
		
	const dispatch = useDispatch()

	const onAddMessage = (message, author) => {
		dispatch(
			addMessageThunk(chatId, {
				id: `${Date.now()}`,
				author: author,
				text: message, 
				date: new Date().toLocaleTimeString(),				
			}, currentChat.author)
		)
	}
	
	if (currentChat) {
	return (
		<div className='chat'>
			<p>{currentChat.author}</p>
			<div className='messagebox'>
				{messages?.length ? (
					messages.map((message) => (
						<MessageList 
							className={message.author === `${currentChat.author}` ? "mes left" : "mes"}
							key={ message.id }
							text={ message.text }
							author={ message.author }
							date={ message.date }
						/>
					))
				) : null }
			</div>			
			<MessageInput
				updateData={onAddMessage} 
				placeholder="Введите сообщение"
			/>
		</div>
	)} else {
		return (
			<div> </div>
			)
	}
}

export default Chat