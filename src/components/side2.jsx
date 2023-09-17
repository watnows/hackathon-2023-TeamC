import { useEffect,useState } from "react"

const btnStyle={
    backgroundColor:"#939393"
}

const hoveredBtnStyle={
    backgroundColor:"#d9d9d9"
}

const caseDesign1 ={
    margin: "5px",
    padding: "5px",
    textAlign: "center",
    border: "1.5px solid #000",
    borderRadius: "5px",
};

const caseDesign2 ={
    display: "block",
    margin: "5px",
    padding: "10px 5px 0px 5px",
    color: "black",
    textAlign: "center",
};

function RadioElement(props) {
    const [isEnter,setIsEnter]=useState(false);

    function handleOnEnter(){
        setIsEnter(true);
    }

    function handleOnLeave(){
        setIsEnter(false);
    }

    return(
        <div style = {isEnter?btnStyle:hoveredBtnStyle} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
            <input type="radio" id={props.button} value={props.title} style={{display : "none"}}/>
            <label for ={props.button} style={caseDesign2}>{props.title}</label>
        </div>
    )
}



export default function SideBar2(){
    return(
        <main style={{width: "100vw",height:"100vh"}}>
            <div style={{width: '15%', height: '100%', display:'flex', alignItems:'flex-end'}}>
                <div style = {{width: '100%', height: '90%', backgroundColor: '#D9D9D9'}}>
                    <details>
                    <summary type="radio" class="syukatsu" style={caseDesign1}>就活</summary>

                    <RadioElement
                    title = "日時調節"
                    button = "button-1"
                    />

                    <RadioElement
                    title = "お礼"
                    button = "button-2"
                    />
                    
                    <RadioElement
                    title = "応募"
                    button = "button-3"
                    />
                    
                    <RadioElement
                    title = "辞退"
                    button = "button-4"
                    />
                    
                    <RadioElement
                    title = "受託"
                    button = "button-5"
                    />

                    <RadioElement
                    title = "謝罪"
                    button = "button-6"
                    />

                    </details>
                </div>
            </div>
        </main>
    )
}