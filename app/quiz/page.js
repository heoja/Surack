
export default function Quiz() {
    let candidates = ['허주연1', '허주연2', '허주연3']
    
    return (
      <div>
        

        <h4 className="title-sub">quiz1</h4>
        <p className="textbox-normal">다음중 진짜는?</p>
        {candidates.map((a, i) => {
            return(
                <div className="food" key={i}>
                    <h4>{candidates[i]}</h4>
                </div>
            )
        })}

      </div>
    )
  }