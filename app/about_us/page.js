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
                    <h3>수락(手絡)은 수화 언어를 스스로 재미있게 익힐 수 있도록 돕는 플랫폼입니다.</h3></div>
                <div className="textbox-normal" >
                    <div className="text-box-small" style={{width:"20%", height:"60%", borderRadius:"20px",
                        textAlign:"center"}}>수락(手絡)</div>
                    <div className="textbox-normal" style={{width:"70%", padding:"10px", paddingTop:"15px"}}>손 수(手) + 이을 락(絡)<br/>수화 언어의 학습을 통해 비장애인과
                    청각 장애인이 서로 연결되었으면 하는 프로젝트의 의도를 담았습니다.~~~~~</div></div>
                <hr></hr>
                <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 팀 소개</h2></div>
                <div className="textbox-normal" >
                    <div className="textbox-normal" style={{width:"70%", padding:"10px", paddingTop:"15px"}}>
                        <h3>저희 팀은 재잘재잘... 누구로 구성되어 있고... ~를 위해 모인 사람들이고.. 사진은 나중에 다시 찍고 수정해도 되고..</h3></div>
                    <img src="../jaejal.jpg" className="img"/></div>
            </div>
        </div>
    )
}