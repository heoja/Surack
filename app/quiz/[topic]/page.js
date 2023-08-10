"use client"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import '../quiz.css';
import { curriculumList } from '../data/curriculum_list'
import SignToKoreanQuiz from '../sign_to_korean_quiz'

 
export default function Page() {
    const router = useRouter()
    const pathName = usePathname()
    const [searchParams, setSearchParams] = useSearchParams()
  
    

  return <div className='bigbox' style={{overflow:"hidden"}}>
    
    <SignToKoreanQuiz/>
    
      
    {/* <div>{decodeURIComponent(pathName)}</div> */}
    
    {/* <button type="button" onClick={() => router.back()}>뒤로 가기</button> */}
    </div>

}