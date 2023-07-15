"use client";
import 선택지Quiz from "./quiz2";

export default function Quiz() {
    let candidates = ['허주연1', '허주연2', '허주연3']
    
    return (
      <div className="textbox-normal" style={{height:'85vh', width:'95%', backgroundColor:'white', 
      color:'#4e37af', borderRadius:'20px', marginTop:'1%', flexDirection:"column", marginLeft:"auto",
      marginRight:"auto", overflowY:"auto"}}>
        
        <선택지Quiz/>
        
        
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