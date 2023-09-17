import { useEffect,useState } from "react"

const CaseDesign ={
    fontSize: "140%",
    margin: "10px",
}

const RadioDesign ={
    display: "block",
    fontSize: "130%",
    margin: "0px 0px 15px 30px",
    //border: "1px solid"
}

export default function SideBar(){
    return(
        <main style={{width: "100vw",height:"100vh"}}>
            <div style={{width: '15%', height: '100%', display:'flex', alignItems:'flex-end'}}>
                <div style = {{width: '100%', height: '90%', backgroundColor: '#D9D9D9'}}>
                    <details>
                    <summary style={CaseDesign} class="syukatsu">就活</summary>

                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id= "bottun-1" value="日時調節"/>
                        <label for ="bottun-1">日時調節</label>
                    </div>
                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id="bottun-2" value="お礼"/>
                        <label for="bottun-2">お礼</label>
                    </div>
                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id="bottun-3" value="応募"/>
                        <label for="bottun-3">応募</label>
                    </div>
                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id="bottun-4" value="辞退"/>
                        <label for="bottun-4">辞退</label>
                    </div>
                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id="bottun-5" value="受託"/>
                        <label for="bottun-5">受託</label>
                    </div>
                    <div style ={RadioDesign}>
                        <input type="radio" name="work" id="bottun-6" value="謝罪"/>
                        <label for="bottun-6">謝罪</label>
                    </div>
                    </details>
                </div>
            </div>
        </main>
    )
}