import React from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'
import { useState } from 'react'
const Input = ({value ,onChange,label,placeholder,type}) => {
  const [showPassword,setShowPassword]=useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <label className='text-[13px] text-slate-800'>{label}</label>
      <div className='input-box'>
        <input
         type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none'
        />
        {type === 'password' && (
          <>
          {showPassword ? (
            <FaRegEye onClick={()=>toggleShowPassword()} className='cursor-pointer text-slate-400' size={22}/>
            
          ) : (
            <FaRegEyeSlash onClick={()=>toggleShowPassword()} className='cursor-pointer text-primary' size={22} />
          )}
          </>
        )}
      </div>
    </div>
  )
}

export default Input
