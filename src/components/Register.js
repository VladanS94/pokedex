import React, { useState } from 'react'
import StepWizard from "react-step-wizard";
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import Third from './Third';
import '../pages/Login.scss'

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    terms: false
  })
  const onChange = (field, value) => {
    setUserInfo(prevState => ({ ...prevState, [field]: value }))
}

  const register = () =>{
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    window.location.href='/'
  }
  return (


    <div>
        <StepWizard>
            <FirstStep onChange={onChange} userInfo={userInfo} />
            <SecondStep onChange={onChange} userInfo={userInfo} />
            <Third onChange={onChange} onClick={() => register()} userInfo={userInfo} />
        </StepWizard>
    </div>
  )
}

export default Register