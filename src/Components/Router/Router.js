import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Home from '../Home/Home'
import {Registration} from '../Registration/Registration'
import News from '../News/News'
import Profile from '../Profile/Profile'
import Chats from '../ChatsList/ChatsList'
import { PATHS } from '../Constants'

export default function Router() {
	const [ authed, setAuthed ] = useState(false)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setAuthed(true)
			} else {
				setAuthed(false)
			}
		})
	}, [])

	return (
			<Switch>
				<Redirect from="/react" to={PATHS.homeLink}/>
				<Route authenticated={authed} exact path={PATHS.loginLink}>
					<Registration />
				</Route>				
				<Route authenticated={authed} exact path={PATHS.homeLink}>
					<Home />
				</Route>
				<PrivateRoute authenticated={authed} exact path={PATHS.chatsLink}>
					<Chats />
				</PrivateRoute>
				<PrivateRoute authenticated={authed} path={`${PATHS.chatsLink}/:chatId`}>
					<Chats />
				</PrivateRoute>
				<PrivateRoute authenticated={authed} path={PATHS.profileLink}>
					<Profile />
				</PrivateRoute>
				<Route path={PATHS.newsLink}>
					<News />
				</Route>
				<Route>
					<p>404: not found</p>
				</Route>
			</Switch>
	)
}