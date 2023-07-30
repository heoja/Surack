"use client";
import './quiz.css'
import SignToKoreanQuiz from "./sign_to_korean_quiz"

export default function Quiz_temp() {
    // let candidates = ['허주연1', '허주연2', '허주연3']
    
    return (
      <div className="bigbox">
        
        <SignToKoreanQuiz/>
        
        
        {/* <h4 className="title-sub">quiz1</h4>
        <p className="textbox-normal">다음중 진짜는?</p>
        {candidates.map((a, i) => {
            return(
                <div className="food" key={i}>
                    <h4>{candidates[i]}</h4>
                </div>
            )
        })} */}

      </div>
    )
  }