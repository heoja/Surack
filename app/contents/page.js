export default function Contents() {

    return (
        <div >
            {/* <div className="title-sub">Contents</div> */}


            <div className="textbox-normal" style={{height:'85vh', width:'95%', backgroundColor:'white', 
                color:'#4e37af', borderRadius:'20px', marginTop:'1%', flexDirection:"column", marginLeft:"auto",
                marginRight:"auto", overflowY:"auto"}}>
                    <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 커리큘럼</h2></div>
                    <img src="/curriculum_part1.png" className="img" style={{marginLeft:"40px"}}/>
                    <img src="/curriculum_part2.png" className="img" style={{marginLeft:"40px"}}/>
                    <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 설명이 필요하신가요?</h2></div>
                    <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 농인 사회의 문화</h2></div>
                    <div className="textbox-normal" style={{marginLeft:"3%", marginRight:"3%", marginTop:"3%"}}>
                    <h2>· 단어장</h2></div>
                </div>
        </div>
    )
}