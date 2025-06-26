const Session =require('../models/Session')
const Question =require ('../models/Question')

const createSession =async(req,res)=>{
    try {
        const {role,experience,topicsToFocus,description,questions}=req.body
        const userId=req.user._id
        const session=await Session.create({
            usser:userId,
            role,
            experience,
            topicsToFocus,
            description
        })
        const questionDocs=await Promise.all(
            questions.map(async(q)=>{
                const question=await Question.create({
                    session:session._id,
                    question:q.question,
                    answer: q.answer,               })
                return question._id
            })
        )
        session.questions=questionDocs
        await session.save()
        res.status(201).json({success:true,session})
    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
}
const getMySession =async(res,req)=>{
    try {
        
    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
}
const getSessionById =async(res,req)=>{
    try {
        
    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
}
const deleteSession =async(res,req)=>{
    try {
        
    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
}
module.exports={createSession,getMySession,getSessionById,deleteSession}