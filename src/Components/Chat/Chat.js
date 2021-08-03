import React from 'react'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import { USER } from '../Constants'
import { useParams } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import { addMessage } from '../../store/messages/actions'
import { getChatsData } from '../../store/chats/selectors'
import { getMessagesData } from '../../store/messages/selectors'


function Chat(props) {
	const { chatId } = useParams()
	const { chatsList } = useSelector(getChatsData)
	
	const mmm = useSelector(getMessagesData)
	const messages = mmm[chatId] ? mmm[chatId] : []

	const currentChat = Object.values(chatsList).find((chat) => chat.id === chatId)
	
	const dispatch = useDispatch()

	const onAddMessage = (message, author) => {
		dispatch(
			addMessage(chatId, {
				id: `${Date.now()}`,
				author: author,
				text: message, 
				date: new Date().toLocaleTimeString(),				
			})
		)
	}
	
	React.useEffect(() => {
		let mes = messages[messages.length - 1]		
		if (mes) {
			if (mes.author !== currentChat.author)
				setTimeout(() => {
					onAddMessage(mes['text'].split('').reverse().join(''), currentChat.author)
				}, 1500)
		}
	})

	if (currentChat) {
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
	)} else {
		return (
			<div> </div>
			)
	}
}

export default Chat