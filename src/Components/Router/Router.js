import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../Home/Home'

import Profile from '../Profile/Profile'
import Chats from '../ChatsList/ChatsList'
import { PATHS } from '../Constants'



export default function Router(props) {
	return (
			<Switch>
				<Redirect from="/react" to={PATHS.homeLink}/>
				<Route exact path={PATHS.homeLink}>
					<Home />
				</Route>
				<Route exact path={PATHS.chatsLink}>
					<Chats />
				</Route>
				<Route path={`${PATHS.chatsLink}/:chatId`}>
					<Chats />
				</Route>
				<Route path={PATHS.profileLink}>
					<Profile />
				</Route>
				<Route>
					<p>404: not found</p>
				</Route>
			</Switch>
	)
}