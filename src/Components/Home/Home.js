// import { func } from 'prop-types'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import Message from '../Message/Message'
import { USER } from '../Constants'

function Home() {
	return (
		<main>
			<Grid container >
				<Grid item xs={12}>
					< Message/>
				</Grid>
				<Grid item xs={12}>
					<Link	className="speaklink" to="/chats">
						Перейти к беседам
					</Link> 		
				</Grid>
			</Grid>
		</main>
	)
}

export default Home