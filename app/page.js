import Link from "next/link"
import Image from "next/image"


export default function Home() {
  
  return (
    <div style={{}}>
      <div style={{alignItems:"center", justifyItems:"center", flexDirection:"row", display:"flex"}}>
        <div style={{flex:"1", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
          <Image src="/suragy_happy1.png" width={250} height={250} style={{paddingLeft:"auto", paddingRight:"auto" }}/>
          </div>
        <div style={{ width:"40%", flex:"1.2"}}>
          <h4 className="title">手絡</h4>
          <p className="title-sub">수락: 손으로 사람과 사람을 잇다</p>
        </div>
        <div style={{flex:"1", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
          <Image src="/suragy_standing.png" width={250} height={250} style={{paddingLeft:"auto", paddingRight:"auto", }}/>
          </div>
      </div>
      <div className="white-back-body">
        <Link href="/quiz" className="text-box-small" style={{height:"20%"}}>학습하러 가기 →</Link>
        
      </div>
      {/* <img src="/suragy.jpg" className="img"/> */}
    </div>
  )
}