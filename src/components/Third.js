import React from 'react'
import '../pages/Login.scss'

const Third = (props) => {

  return (
    <div className='third-step'>
          <input type='checkbox'
          checked={props.userInfo.terms} 
          onChange={() =>props.onChange('terms', !props.userInfo.terms )}
          />
        <label> Accept terms of service</label>
        <p>
          <button disabled={!props.userInfo.terms} onClick={props.onClick}>Finish</button>
        </p>
    </div>
  )
}

export default Third