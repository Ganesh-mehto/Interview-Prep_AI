
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector.jsx'
import { isValidateEmail } from '../../utils/helper'
import Input from '../../components/inputs/Input.jsx'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext.jsx'
import axiosInstance from '../../utils/axiosInstance.js'
import { API_PATHS } from '../../utils/apiPaths.js'
import uploadImage from '../../utils/uploadImage.js'



const SignUp = ({setCurrentPage}) => 
  {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const {updateUser}=useContext(UserContext)
  const handleSignUp = async (e) => {
    e.preventDefault()
     let profileImageUrl = ''
     if (!fullName){
      setError('Full name is required')
      return
     }
     if (!isValidateEmail(email)) {
       setError('Please enter a valid email address')
       return
     }
     if (!password || password.length < 8) {
       setError('Password must be at least 8 characters long')
       return
     }
     setError('')
   try{
    if(profilePic){
      const imgUploadRes=await uploadImage(profilePic)
      profileImageUrl=imgUploadRes.imageUrl || ""
    }
    const response= await axiosInstance.post(API_PATHS.AUTH.REGISTER,{name:fullName,
      email,password,profileImageUrl,
    })
    const { token } = response.data
    if(token){
      localStorage.setItem("token",token)
      updateUser(response.data)
      navigate("/dashboard")
    }
  }catch(error){
    if(error.response && error.response.data) {setError(error.response.data.message)}
    else {setError('An error occurred during login. Please try again later.')}
  }
  }
 
  return (
    <div className='w-[90vw] md:w-[33vw]  p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below:</p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
       <div className='grid grid-cols-1 md:grid-cols-1 gap-2 '>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          label="Full Name"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          label="Email Address"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          label="Password"
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
