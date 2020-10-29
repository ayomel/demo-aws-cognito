import React, { useState } from 'react'
import { CognitoUser } from 'amazon-cognito-identity-js'

import UserPool from '../UserPool'
import '../App.css'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmNumber, setConfirmNumber] = useState('')

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

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) console.error(err)
      console.log(data, err)
    })
  }

  const ConfirmSubmit = (e) => {
    e.preventDefault()

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    })

    user.confirmRegistration(confirmNumber, true, function (err, result) {
      if (err) {
        console.log(err.message || JSON.stringify(err))
        return
      }
      console.log('call result: ' + result)
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

      <form onSubmit={ConfirmSubmit}>
        <input
          type='text'
          placeholder='ConfirmNumber'
          value={confirmNumber}
          onChange={(e) => setConfirmNumber(e.target.value)}
        />
        <button type='submit'>Confirm Number</button>
      </form>
    </div>
  )
}

export default SignUp
