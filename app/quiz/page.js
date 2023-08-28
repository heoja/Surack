import React from 'react';
import './quiz.css';
import { curriculumList } from "./data/curriculum_list";
import Link from 'next/link';

export default function Quiz() {
  return (
    <div className="bigbox">
      
      {curriculumList.map((item) => (
        <div style={{alignItems:"center", justifyItems:"center", flexDirection:"row", display:"flex", margin:"10px"}}>
          <div key={item} className='circle' style={{}}/>

          
          <Link key={item} href={{pathname:`/quiz/${encodeURIComponent(item)}`, query:{topic:item}}} 
          style={{marginLeft:"10px", marginRight:"10px"}}
          as={`/quiz/${encodeURIComponent(item)}`} >
            
              <h3>{item}</h3>
            
          </Link>
        </div>
      ))}

      <div style={{margin:"10px"}}>컨텐츠 준비 중입니다.</div>
    </div>
  );
}
