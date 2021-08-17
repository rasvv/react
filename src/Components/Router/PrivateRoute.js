import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PATHS } from '../Constants'

export default function PrivateRoute({ authenticated, ...rest }) {
	return authenticated ? 
		<Route {...rest} />
	 : 
		<Redirect to = { PATHS.loginLink } />
}

