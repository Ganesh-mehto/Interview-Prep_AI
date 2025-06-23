
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfilePhotoSelector from '../../components/inputs/profilePhotoSelector'
import { isValidEmail } from '../../utils/helper'

const SignUp = ({setCurrentPage}) => 
  {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault()
  }
  if (!fullName || !email || !password) {
    setError('All fields are required')
    return
  }
  if (!isValidEmail(email)) {
    setError('Please enter a valid email address')
    return
  }
  if (!password) {
    setError('Password must be at least 8 characters long')
    return
  }
  return (
    <div>
      <h3 className='w-[99vw] md:w-[33vw] p-7 flex flex-col justify-center'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below:</p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
       <div className='grid grid-cols-1 md:grid-cols-1 gap-2 '>
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          placeholder="Full Name" 
          
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email Address" 
        
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          
        />
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className='btn-primary'>Sign Up</button>
        <p className='text-sm'>Already have an account? <span onClick={() => setCurrentPage('login')} className='text-primary cursor-pointer underline'>Login</span></p>
        </div>
    </form>
    </div>
  )
}

export default SignUp
