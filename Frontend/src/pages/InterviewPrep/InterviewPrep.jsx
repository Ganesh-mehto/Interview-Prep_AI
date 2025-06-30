import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment, { duration } from 'moment'
import {AnimatePresence,delay,motion, scale} from "framer-motion"
import { LuCircleAlert,LuListCollapse } from 'react-icons/lu'
import SpinnerLoader from '../../components/loader/SpinnerLoader'
import {toast} from "react-hot-toast"
import DashBoardLayout from '../../components/layouts/DashBoardLayout'
import RoleInfoHeader from './components/RoleInfoHeader'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPath'
import QuestionCard from '../../components/cards/QuestionCard  '
const InterviewPrep = () => {
  const {sessionId}=useParams()
  const [sessionData,setSessionData]=useState(null)
  const [errorMsg,setErrorMsg]=useState('')
  const [openLearnMoreDrawer,setOpenLearnMoreDrawer]=useState(false)
  const [explanation,setExplanation]=useState(null)
  const [isLoading,setIsLoading]=useState(false)
  const [isUpdateLoader,setIsUpdateLoader]=useState(false)

  const fetchSessionDetailsById=async()=>{
    try {
      const response=await axiosInstance.get(API_PATHS.SESSION.GET_ONE(sessionId))
      if(response.data && response.data.session){
        setSessionData(response.data.session)
      }
    } catch (error) {
      console.error("Error:",error)
    }
  }
  const generateConceptExplanation=async(question)=>{

  }
  const toggleMoreQuestions=async()=>{

  }
  const uploadMoreQuestions=async()=>{

  }
  useEffect(()=>{
    if(sessionId){
      fetchSessionDetailsById()
    }
    return ()=>{}
  },[])
  return (
    <DashBoardLayout>
      <RoleInfoHeader
          role={sessionData?.role || ""}
                  topicsToFocus={sessionData?.topicsToFocus || ""}
                  experience={sessionData?.experience || ""}
                  questions={sessionData?.questions.length || ""}
                  description={sessionData?.description || ""}
                  lastUpdated={sessionData?.updatedAt?moment(sessionData.updatedAt).format("Do MMM YYYY"):""}
      
      />
      <div className="container mx-auto pt-4 px-4 md:px-0">
        <h2 className="text-lg font-semibold color-black">
          Interview Q & A
        </h2>
        <div className="grid grid-cols-12 gap-4 mt-5 mb-10">
          <div className={`md:col-span-12 ${openLearnMoreDrawer ? "md:col-span-7":"md:col-span-8"}`}>
            <AnimatePresence>
              {sessionData?.questions?.map((data,index)=>{
                return(
                  <motion.div key={data._id ||index}
                  initial={{opacity:0,y:-20}}
                  animate={{opacity:0,scale:0.95}}
                  exit={{opacity:0,scale:0.95}}
                  transition={{
                    duration:0.4,
                    type:"spring",
                    stiffness:100,
                    delay:index*0.1,
                    damping:15,
                  }}
                  layout
                  layoutId={`question-${data._id || index}`}
                  >
                    <>
                      <QuestionCard  
                        question={data?.question}
                        answer={data?.answer}
                        onLearnMore={()=>generateConceptExplanation(data.question)}
                        isPinned={data?.isPinned}
                        onTogglePin={()=>toggleQuestionPinStatus(data._id)}
                      />
                    </>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  )
}

export default InterviewPrep
