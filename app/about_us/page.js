import { Divider } from "semantic-ui-react";

export default function About_us() {

    return (
        <div >
            <div className="textbox-normal" style={{height:'85vh', width:'95%', backgroundColor:'white', 
                color:'#4e37af', borderRadius:'20px', marginTop:'1%', flexDirection:"column", marginLeft:"auto",
                marginRight:"auto", overflowY:"auto"}}>
                <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 수락이란</h2></div>
                <div className="textbox-normal" style={{}}>
                    <h3>수락(手絡)은 수어를 재미있게 배울 수 있도록 돕는 학습 플랫폼입니다.</h3></div>
                <div className="textbox-normal" >
                    <div className="text-box-small" style={{width:"20%", height:"60%", borderRadius:"20px",
                        textAlign:"center"}}>수락(手絡)</div>
                    <div className="textbox-normal" style={{width:"70%", padding:"10px", paddingTop:"15px"}}>손 수(手) + 이을 락(絡)<br/>
                    수어도 영어나 중국어, 일본어 같은 하나의 매력적인 언어이지만 배울 수 있는 곳을 찾기 어렵고 장소 또한 한정적이기에 온라인으로 수어를 쉽게 접할 수 
                    있는 사이트의 필요성을 느꼈습니다.<br/>수락(手絡)이라는 이름에는, 누구나 수어를 쉽게 접할 수 있도록 하여 청인과 농인이 어우러지는 사회가
                    되었으면 하는 프로젝트의 의도가 담겨 있습니다.</div></div>
                <hr></hr>
                <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 팀 소개</h2></div>
                <div className="textbox-normal" >
                    <div className="textbox-normal" style={{width:"70%", padding:"5px", paddingTop:"15px", flexDirection:"column", 
                    fontFamily:"esamanru_light"}}>
                        <h3>저희 팀 ‘재잘재잘’을 소개합니다!<br/>‘재잘재잘’은 서울대학교 기술나눔단 VESS에서 
                        4명의 팀원들이 함께 공통된 문제를 해결하기 위해 모였습니다.</h3>
                        <h3 style={{fontFamily:"omu_DaYeBBeum"}}><br/>김성재   :   Development Team, Team Leader<br/>박주영   :   Contents Team<br/>
                    조희원   :   Contents Team<br/>허주연   :   Development Team<br/></h3>
                        </div>
                    <img src="../jaejal.jpg" className="img"/></div>
            </div>
        </div>
    )
}