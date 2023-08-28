"use client";
import Image from "next/image"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import './quiz.css'
import {useState} from "react"
import rightsudal from '/public/suragy_happy2.png'
import wrongsudal from "/public/suragy_sad.png"
import cheerupSudal from "/public/suragy_cheerup.png"
import floatingSudal from "/public/suragy_floating.png"
import {quizdataS}  from "./data/data"



export default function SignToKoreanQuiz({item}){
  const router = useRouter()

  let [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = quizdataS;
  var topicName = item.substr(6)
  const topicQuestions = questions.filter(qList => qList.topic.includes(topicName));
  const { topic, question, answers, correctAnswer, image } = topicQuestions[activeQuestion];
  const questionLength = topicQuestions.length;

  const [checkanswer, setcheckanswer] = useState(false);
  const [amIright, setamIright] = useState(false);
  const [Chosenanswer, setChosenanswer] = useState('')
  const [score, setscore] = useState(0)


  const [finishedQuiz, setFinishedQuiz] = useState(false);

  const handleChange = (e) => {
    setChosenanswer(e.target.value)
    handleAnswer(e.target.value)
  }

  const Nextquestion = () =>{
    if (activeQuestion === questionLength-1 && checkanswer) {
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
      // console.log("맞았다")
      setcheckanswer(true)
      setamIright(true)
      setscore(score+1)
    }
    else{
      // console.log("틀렸다")
      setcheckanswer(true)
      setamIright(false)};
  }

  var goodScore = score >= questionLength / 2
  
  return(
    finishedQuiz ?
    <div  style={{alignItems:"center", justifyItems:"center", display:"flex", flexDirection:"column", height:"max-content"}}>
      <Image src = {goodScore ? floatingSudal:cheerupSudal} style={{height:"40%", width:"auto"}}
      alt = ""/>
      <div style={{marginBottom:"10px"}}>{goodScore ? "잘했어용 ㅎㅎ🏆":"조금 더 노력해 보아요 ~💪"}{"\u00a0\u00a0("}{score}/{questionLength}{")"}</div>
      <button className="btn" type="button" onClick={() => router.back()}>뒤로 가기</button>
    </div>
      
    : <div>
          <h4 className = "quizhead" >{"💚\u00a0\u00a0"}{topicName}{"\u00a0\u00a0💚"}</h4>
      
        <div style={{alignItems:"center", justifyItems:"center", flexDirection:"row", display:"flex"}}>
          <div style={{flex:"1", marginLeft:"auto", marginRight:"auto", textAlign:"center", fontSize:"20px"}}></div>
          <div style={{flex:"1", marginLeft:"auto", marginRight:"auto", textAlign:"center", fontWeight:"bold", fontSize:"22px"}}>
            {activeQuestion+ 1}번 문제: {activeQuestion < questionLength ? questions[activeQuestion].question : null}
          </div>
          <div style={{flex:"1", marginLeft:"auto", marginRight:"25px", textAlign:"end"}}>
          맞은 개수 : {score}
          </div>
        </div>
        <div style={{height:"30px"}}></div>

        
      
      <div className='middle' style={{alignItems:"center", justifyItems:"center", flexDirection:"row", display:"flex"}}>
        {checkanswer? (amIright? 
        (<div style={{flex:"1"}}>
          <Image src = {rightsudal} className = "suragy_image" alt = "" height='200'/>
          <div style={{marginTop:"0", marginBottom:"0"}}>정답입니다</div>
          </div>) : 
          (<div style={{flex:"1"}}>
            <Image src = {wrongsudal} className = "suragy_image" alt = "" height='200'/>
            <div style={{marginTop:"0", marginBottom:"0"}}>아쉽네요~</div>
            </div>))
        : (<div></div>)}

        <div style={{flex:"1"}}>
          <Image src = {image} className = "quizimage" alt = "퀴즈이미지" width={100} height={100} />
        </div>

        {checkanswer ? (<div style={{float:"right", flex:"1"}}><button className="btn" onClick={Nextquestion}>다음 문제</button></div>):(<div></div>)}
      </div>

      <div className="middle">
        {answers.map((option, index)=>{
            return activeQuestion < questionLength ? (
              <label>
              {!checkanswer?
              (<div style={{alignItems:"center", textAlign:"center", display:"inline-block"}}>
                <input type = "button" onClick={handleChange} value={option} style={{display:"inline-block"}}/></div>)
              :(<div style={{alignItems:"center", textAlign:"center", display:"inline-block"}}>
                <input type = "button" value={option} />
                <div >{option === correctAnswer ? ("O") : ("X")}</div>
                </div>)}
              </label>
              ):null})}
        
      </div>
      
            
      </div>
  
  )
            
}
  
