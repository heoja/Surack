import React from 'react';
import './quiz.css';
import { curriculumList } from "./data/curriculum_list";
import Link from 'next/link';

export default function Quiz() {
  return (
    <div className="bigbox">
      {curriculumList.map((item) => (
        <Link href={`/quiz/topic/${item}`}>
          
            <h3>{item}</h3>
          
        </Link>
      ))}
    </div>
  );
}
