import firebase from 'firebase'
import { useState } from "react"
import { Input, Button } from '@material-ui/core'

export const Registration = () => {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ error, setError ] = useState('')

	const onEmailChange = (e) => {
		console.log(e.target.value)
		setEmail(e.target.value)
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password)
		} catch (error) {
			console.log(error)
		}		
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input 
					placeholder='email'
					name='email'
					type='email'
					onChange={onEmailChange}
					value={email}
				/>

				<Input 
					placeholder='password'
					name='password'
					type='password'
					onChange={onPasswordChange}
					value={password}
				/>
				<div>
					{error && <p>{error}</p>}
					<Button
						type='submit'
					>
						Login
					</Button>
				</div>
			</form>
		</div>
	)

}