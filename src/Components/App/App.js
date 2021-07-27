import './App.sass'
import React, {useState, useCallback } from 'react'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import { PATHS } from '../Constants'

export const ChatContext = React.createContext({ chatId: undefined })


function App() {
	const [chats] = useState([
		{id: 'chat1',	author: 'Martin', chat:[]},
		{id: 'chat2',	author: 'Jessica', chat:[]},
		{id: 'chat3',	author: 'Michael', chat:[]},
	])

	const [currentChat, setCurrentChat] = useState(chats[0])
	const [currentChatChat, setCurrentChatChat] = useState(currentChat.chat)

	const onCurrentChatChange = (chat) => {
		setCurrentChat(chat)
		setCurrentChatChat(currentChat.chat)
	}

	const onCurrentChatChatChange = (chat) => {
		setCurrentChatChat(chat)
	}

	const checkChatExists = useCallback(
		(chatId) => {
			return Boolean(chats.find((chat) => chat.id === chatId))
		},
		[chats]
	)	

	return (
		<div className="app">
			<header className="app-header header">
				My messenger
				<div className="menu">
					<Link to={PATHS.homeLink}>Главная</Link>
					<Link to={PATHS.chatsLink}>Чаты</Link>
					<Link to={PATHS.profileLink}>Профиль</Link>
				</div>
			</header>
			<ChatContext.Provider value={currentChat.id}>
				<Router
					chats={chats}
					currentChat={currentChat}
					onCurrentChatChange={onCurrentChatChange}
					checkChatExists={checkChatExists}
				/>
			</ChatContext.Provider>
		</div>
	);
}

export default App;
