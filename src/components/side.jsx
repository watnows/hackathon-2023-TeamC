import { useEffect,useState } from "react"

const btnStyle={
    backgroundColor: "gray"
}

const hoveredBtnStyle={
    backgroundColor:"white"
}


export default function SideBar(){
    const [isEnter,setIsEnter]=useState(false);

    function handleOnEnter(){
        setIsEnter(true);
    }

    function handleOnLeave(){
        setIsEnter(false);
    }

    return(
        <main style={{width: "100vw",height:"100vh"}}>
            <div style={{width: '15%', height: '100%', display:'flex', alignItems:'flex-end'}}>
                <div style = {{width: '100%', height: '90%', backgroundColor: '#D9D9D9'}}>
                    <div class="syukatsu">就活</div>

                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="日程日付調節" style={{display : "none"}}/>
                        <label htmlFor="">日程時刻調節</label>
                    </div>
                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="お礼" style={{display : "none"}}/>
                        <label htmlFor="">お礼</label>
                    </div>
                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="応募" style={{display : "none"}}/>
                        <label htmlFor="">応募</label>
                    </div>
                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="辞退" style={{display : "none"}}/>
                        <label htmlFor="">お礼</label>
                    </div>
                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="受託" style={{display : "none"}}/>
                        <label htmlFor="">受託</label>
                    </div>
                    <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
                        <input type="radio" name="work" id="" value="謝罪" style={{display : "none"}}/>
                        <label htmlFor="">謝罪</label>
                    </div>
                </div>
            </div>
        </main>
    )
}