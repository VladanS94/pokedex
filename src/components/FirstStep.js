import React from 'react'

const FirstStep = (props) => {

  return (
    <div className='first-step'>
            <p>
              <input type='text' 
              placeholder='Ime'
              value={props.userInfo.firstname}
              onChange={(e) => props.onChange('firstname', e.target.value)}
              />
            </p>
            <p>
              <input type='text' 
              placeholder='Prezime'
              value={props.userInfo.lastname}
              onChange={(e) => props.onChange('lastname', e.target.value)}
              />
            </p>
            <p>
              <input type='text' 
              placeholder='E-mail'
              value={props.userInfo.email}
              onChange={(e) => props.onChange('email', e.target.value)}
              />
            </p>
            <button disabled={!props.userInfo.firstname || !props.userInfo.lastname || !props.userInfo.email } onClick={props.nextStep}>Next Step</button>
    </div>
  )
}

export default FirstStep