import React, { useState } from 'react'
import UserPool from '../UserPool'
import '../App.css'

function SignUp() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const attributeList = [
		{
			Name: 'phone_number',
			Value: '+15555555555',
		},
		{
			Name: 'email',
			Value: email,
		},
	]

	const onSubmit = (e) => {
		e.preventDefault()

		// UserPool.signUp(email, password, attributeList, (err, data) => {
		// 	// if (err) console.error(err)
		// 	console.log(data, err)
		// })
		UserPool.signUp(email, password, attributeList, null, (err, data) => {
			// if (err) console.error(err)
			console.log(data, err)
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
				<button type='submit'>SignUp</button>
			</form>
		</div>
	)
}

export default SignUp
