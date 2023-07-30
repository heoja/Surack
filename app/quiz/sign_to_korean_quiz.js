"use client";

import {useState} from "react"
import Image from "next/image"
import rightsudal from '/public/suragy_happy2.png'
import wrongsudal from "/public/suragy_sad.png"
import {quizdataS}  from "./data/data"


export default function SignToKoreanQuiz(chapternumber){
  let [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = quizdataS;
  const { question, answers, correctAnswer, image } = questions[activeQuestion];
  const [checkanswer, setcheckanswer] = useState(false);
  const [amIright, setamIright] = useState(false);
  const [Chosenanswer, setChosenanswer] = useState('')
  const [score, setscore] = useState(0)
  let chapter = "ch. 1:\u00a0\u00a0\u00a0\u00a0\u00a0"
  let chaptername = "첫 인사하기"
 


  const [finishedQuiz, setFinishedQuiz] = useState(false);

  const handleChange = (e) => {
    setChosenanswer(e.target.value)
    handleAnswer(e.target.value)
  }

  const Nextquestion = () =>{
    if (activeQuestion === 4-1 && checkanswer) {
      setcheckanswer(false);
      
      setFinishedQuiz(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
      setcheckanswer(false);
    }
  }

  const handleAnswer = (a) => {
    const isCorrect = a === correctAnswer
    if(isCorrect){
      console.log("맞았다")
      setcheckanswer(true)
      setamIright(true)
      setscore(score+1)
    }
    else{console.log("틀렸다")
    setcheckanswer(true)
    setamIright(false)};
  }

 
  
  
  return(
    finishedQuiz?
    <div className="textbox-normal" style={{justifyContent:"center", alignItems:"center", height:"max-content"}}>Quiz done</div>:
    <div>
      
        
          <h4 className = "quizhead">{chapter}{chaptername}</h4>
      
      
        <h3 style={{textAlign:"center"}}>{activeQuestion+ 1}번 문제: {activeQuestion < 4 ? questions[activeQuestion].question : null}</h3>
        <h4 style={{textAlign:"right", marginRight:"30px"}}> 맞은 개수 : {score} </h4>
      
      <div>
        <img src = {image} className = "quizimage" alt = ""/>
        
      </div>
      <div className="middle">
        {answers.map((option, index)=>{
            return activeQuestion < 4 ? (
              <label>
              {!checkanswer?(<div style={{alignItems:"center", textAlign:"center", display:"inline-block"}}><input type = "button" onClick={handleChange} value={option} style={{display:"inline-block"}}/></div>)
              :(<div style={{alignItems:"center", textAlign:"center", display:"inline-block"}}><input type = "button" value={option} style={{float:"left", display:"inline-block"}}/><div>{option === correctAnswer ? ("O") : ("X")}</div></div>)}
              </label>
              ):null})}
        {checkanswer? (amIright? 
        (<div>
          <Image src = {rightsudal} className = "suragy_image" alt = "" height='200'/>
          <div>정답입니다</div>
          </div>) : 
          (<div>
            <Image src = {wrongsudal} className = "suragy_image" alt = "" height='200'/>
            <div>아쉽네요~</div>
            </div>))
        : (<div></div>)}
      </div>
      {checkanswer ? (<div style={{float:"right"}}><button onClick={Nextquestion}>다음 문제</button></div>):(<div></div>)}
            
      </div>
  
  )
            
}
  
