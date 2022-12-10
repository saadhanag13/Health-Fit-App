import React, {useState} from 'react'
import './sign-up.css' 
import { signUpUser } from '../../axios/auth.axios'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [age, setAge] = useState(0)
    const [phoneNumber, setPhoneNumber] = useState('')
    const handleSubmit= async(e) => {
      e.preventDefault()
      await signUpUser({email,username,password,confirmPassword,age,phoneNumber}).then((res)=>{
        console.log(res.data)
      })
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="email" placeholder='Email' name='email' value={email} onChange= {(e)=> setEmail(e.target.value)}/>
            <input type="text" placeholder='Name' name='username' value={username} onChange= {(e)=> setUsername(e.target.value)}/>
            <input type="text" placeholder='Phone number' name='phonenumber' value={phoneNumber} onChange= {(e)=> setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder='Age' name='age' value={age} onChange= {(e)=> setAge(e.target.value)}/>
            <div>
              <input type="text" placeholder='OTP' name='OTP' value={OTP} onChange= {(e)=> setOTP(e.target.value)}/>
              <button type='button'>
                Generate OTP
              </button>
            </div>
            <input type="text" placeholder='Password' name='password' value={password} onChange= {(e)=> setPassword(e.target.value)}/>
            <input type="text" placeholder='Confirm password' name='confirmpassword' value={confirmPassword} onChange= {(e)=> setConfirmPassword(e.target.value)}/>
          <button>Create your account</button>
        </form>
    </div>
  )
}

export default Signup