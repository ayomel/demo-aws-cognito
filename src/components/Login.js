import React, { useState } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

import UserPool from '../UserPool'
import '../App.css'

function Login() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		const user = new CognitoUser({
			Username: email,
			Pool: UserPool,
		})

		const AuthDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		})

		user.authenticateUser(AuthDetails, {
			onSuccess: (data) => {
				console.log('Success:', data)
			},
			onFailure: (data) => {
				console.log('Failed:', data)
			},
			newPasswordRequired: (data) => {
				console.log('Password:', data)
			},
		})
	}

	return (
		<div className='App'>
			<form onSubmit={onSubmit}>
				<input
					type='username'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default Login
