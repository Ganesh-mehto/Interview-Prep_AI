const questionAnswerPrompt =(role,experience,topicsToFocus,numberOfQuestions)=>(
    `You are an AI trained to Generated technical inetrview questions and answers.
    Task:
    -Role:${role}
    -Candidate Experience:${experience}
    -Focus Topics:${topicsToFocus}
    -Write:${numberOfQuestions}
    `
)
const conceptExplainPrompt=(question)=>`
    You are an AI trained to Generated technical inetrview questions and answers
    Task:
    -Explain the following question and its concept in depth as if you're teching a beginner developer
    -Question:${question}
`
module.exports={questionAnswerPrompt,conceptExplainPrompt}