import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PATHS } from '../Constants'

export default function PublicRoute({ authenticated, ...rest }) {
	return !authenticated ? 
		<Route {...rest} />
	 : 
		<Redirect to = { PATHS.chatsLink } />
}
