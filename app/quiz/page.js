import React from 'react';
import './quiz.css';
import { curriculumList } from "./data/curriculum_list";
import Link from 'next/link';

export default function Quiz() {
  return (
    <div className="bigbox">
      <div style={{margin:"10px"}}>첫인사 하기 이외 컨텐츠는 준비 중입니다.</div>
      {curriculumList.map((item) => (
        <div style={{alignItems:"center", justifyItems:"center", flexDirection:"row", display:"flex", margin:"10px"}}>
          <div key={item} className='circle' style={{}}/>

          
          <Link key={item} href={`/quiz/${encodeURIComponent(item)}`} style={{marginLeft:"10px", marginRight:"10px"}}>
            
              <h3>{item}</h3>
            
          </Link>
        </div>
      ))}
    </div>
  );
}
