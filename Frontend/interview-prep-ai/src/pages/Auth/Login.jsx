import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
useState
useNavigate
import Input from '../../components/inputs/Input.jsx'
import { isValidEmail } from '../../utils/helper.js'


const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')    
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleLogin =async (e) => {
    e.preventDefault()
  }
  if(!isValidEmail(email)) {
    setError('Please enter a valid email address')
    return;
  }
  if(!password){
    setError('Password cannot be empty')
    return;
  }
  setError('')
  try{

  }catch(error){
    if(error.response && error.response.data) {setError(error.response.data.message)}
    else {setError('An error occurred during login. Please try again later.')}
  }

  return (
  <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
    <h3 className='text-lg font-semibold text-black'>Welcome Back</h3>
    <p className='text-xs text-slate-700 mt-[5px] justify-center'>Login to your account</p>
    <form onSubmit={handleLogin} className=''>
        <Input value={email} onchange={({target})=>setEmail(target.value)} lable="Email Adress" placeholder="text@gmail.com"
        type="text">
        </Input>
        <Input value={password} onchange={({target})=>setPassword(target.value)} lable="Password" placeholder="Min 8 Characters"
        type="password">
        </Input>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>
        }
        <button type='submit' className='btn-primary'>Login</button>
        <p className='text-[13px] text-slate-800 mt-3'>Don't have an account? <span onClick={() => setCurrentPage('signup')} className='text-primary cursor-pointer underline'>SignUp</span></p>
    </form>
  </div>
  )
  
}

export default Login
