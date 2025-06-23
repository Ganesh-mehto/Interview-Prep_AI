import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'
import Dashboard from './pages/Home/Dashboard'
import Login from './pages/Auth/login'
import SignUp from './pages/Auth/SignUp'
import LandingPage from './pages/LandingPage'
import './index.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
      <Toaster toastOptions={{
        className: '',
        style: {
          fontSize: '13px',
        },
      }} />
    </div>
  )
}

export default App
