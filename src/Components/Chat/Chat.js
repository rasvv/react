import React from 'react'
import MessageList from '../MessageList/MessageList'
import { useState } from 'react'
import MessageInput from '../MessageInput/MessageInput'
import { USER } from '../Constants'
import { Redirect } from 'react-router'
import { ChatContext } from '../App/App'
import { useContext } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addMessage } from '../../store/messages/actions'


function Chat(props) {
	const {chatsList, currentChat} = useSelector((state) => state.chats)
	const messages = useSelector((state) => state.messages.MessageList)
	
	const dispatch = useDispatch()

	const onAddMessage = (message) => {
		dispatch(addMessage(currentChat.id, message))
	}

	// const { contextProps } = useContext(ChatContext)
	// const [messageList, setMessageList] = useState([])

	// const {
	// 	currentChat,
	// 	checkChatExists
	// } = props

	// const { chatId } = useParams()
	// console.log(contextProps);
	// const addMessage = (message, name) => {
	// 	setMessageList(messageList => [...messageList, { text: message, author: name, date: new Date().toLocaleTimeString() }])
	// }
	
	React.useEffect(() => {
		if (messages) {
			let mes = messages[messages.length - 1]
			if (mes['author'] !== `${currentChat.author}`)
				setTimeout(() => {
					onAddMessage(mes['text'].split('').reverse().join(''), `${currentChat.author}`)
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
					messages.map((message, index) => (
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
				updateData={onAddMessage} 
				placeholder="Введите сообщение"
			/>
		</div>
	)
}

export default Chat