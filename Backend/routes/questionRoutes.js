const express =require('express')
const {togglePinQuestion,uploadQuestionNote,addQuestionsToSession}=require("../controllers/questionController")
const { protect } = require('../middlewares/authMiddleware')
const { route } = require('./authRoutes')

const router =express.Router()

router.post('/add',protect,addQuestionsToSession)
router.post('/:id/pin',protect,togglePinQuestion)
router.post('/:id/note',protect,uploadQuestionNote)
module.exports=router