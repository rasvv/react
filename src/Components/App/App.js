import './App.sass'
import React, {useState, useCallback } from 'react'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import { PATHS } from '../Constants'
import {useSelector, useDispatch} from 'react-redux'

export const ChatContext = React.createContext({ chatId: undefined })


function App() {
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
				<Router	/>
		</div>
	);
}

export default App;
