import React from 'react'
import ProfileInfoCard from "../cards/ProfileInfoCard"
import { Link } from 'react-router-dom'
Link
const Navbar = () => {
  return (
    <div className="  h-16 bg-white border-b border-gray-200/50 backdrop-blur-[12px] py-2.5 px-4 md:px-0 top-0 z-30">
        <div className="  container mx-auto gap-5">
            <Link to="/dashboard" className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-medium text-black leading-5">
                    Interview Prep AI
                </h2>
                <ProfileInfoCard/>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
