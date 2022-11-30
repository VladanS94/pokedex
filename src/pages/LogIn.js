import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const LogIn = () => {
  return (
    <div className='login'>
        <form>
            <p>
              <input 
              type='text'
              placeholder='E-mail'
              />
            </p>
            <p>
              <input 
              type='password'
              placeholder='Password'
              />
            </p>
            <button>Log In</button>
            <Link to='/register'>Register</Link>
        </form>
    </div>
  )
}

export default LogIn