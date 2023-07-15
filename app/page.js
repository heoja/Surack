import Link from "next/link"


export default function Home() {
  let name = 'sjkim'
  return (
    <div>
      <h4 className="title">手絡</h4>
      <p className="title-sub">수락: 손으로 사람과 사람을 잇다</p>
      <div className="new-body">
        <Link href="/quiz" className="text-box-small" style={{height:"20%"}}>학습하러 가기 →</Link>
        
      </div>
      {/* <img src="/suragy.jpg" className="img"/> */}
    </div>
  )
}