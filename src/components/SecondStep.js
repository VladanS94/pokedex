import React, { useState } from 'react'

const SecondStep = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [checkPassword, setCheckPassword] = useState('')
  return (
    <div className='second-step'>
        <p>
          <input type='password' 
          placeholder='Password'
          value={props.userInfo.password}
          onChange={(e) => props.onChange('password', e.target.value)}
          />
        </p>
        <p>
          <input type='password' 
          placeholder='Confirm Password'
          value={checkPassword}
          onChange={(e) => {
            setCheckPassword(e.target.value)
            props.userInfo.password === e.target.value? setIsConfirmed(true)
            : setIsConfirmed(false)
          }}
          />
        </p>
        <button onClick={props.previousStep}>Previous Step</button>
        <button disabled={!isConfirmed} onClick={props.nextStep}>Next Step</button>
    </div>
  )
}

export default SecondStep