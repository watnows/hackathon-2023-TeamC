import { useEffect, useState } from "react"

const btnStyle = {
    backgroundColor: "#939393"
}

const hoveredBtnStyle = {
    backgroundColor: "#d9d9d9"
}

const selectedBtnStyle = {
    color: "red"
}

const caseDesign1 = {
    margin: "5px 5px 0px 5px",
    padding: "5px 5px 0px 10px",
    textAlign: "left",
    //border: "1.5px solid #000",
    //borderRadius: "5px",
};

const caseDesign2 = {
    display: "block",
    margin: "5px",
    padding: "10px 5px 0px 20px",
    textAlign: "left",
    //border: "1.5px solid #000",
    //borderRadius: "5px",
};

const ButtonTitle = [
    {
        button:"button-1",
        title:"日程調節"
    },
    {
        button:"button-2",
        title:"お礼"
    },
    {
        button:"button-4",
        title:"辞退"
    },
    {
        button:"button-5",
        title:"承諾"
    },
    {
        button:"button-6",
        title:"謝罪"
    },
]


function RadioElement(props) {
    const [isEnter, setIsEnter] = useState(false);
    // const [isSelected, setIsSelected] = useState(false);

    function handleOnEnter() {
        setIsEnter(true);
    }

    function handleOnLeave() {
        setIsEnter(false);
    }

    function handleClick() {
        props.setter(props.title)
        // setIsSelected(false);
    }

    function handleCahnge(e) {
        console.log(e.target.id)
        props.setSelectedIndex(props.button)
    }

    return (
        // <div style={(isEnter ? btnStyle : hoveredBtnStyle)&&(props.selectedIndex === props.button ? selectedBtnStyle : btnStyle)} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave} onClick={handleClick}>
        <div style={{
            backgroundColor: isEnter? "#939393" : "#d9d9d9",
            color: props.selectedIndex === props.button ?  "red" : "#000000"
        }} onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave} onClick={handleClick}>
        
            <input type="radio" id={props.button} value={props.title} 
            style={{ display: "none" }} name="work"
            onChange={handleCahnge}/>
            <label for={props.button} style={caseDesign2}>{props.title}</label>
        </div>
    )
}

function SideBar({menuStatusSetter}) {
    const [selectedIndex,setSelectedIndex]=useState("button-1");
    useEffect(()=>{
        console.log(selectedIndex)
    }, [selectedIndex])
    return (

        <div style={{ width: '15%', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: '90%', backgroundColor: '#D9D9D9',border: 'dashed 5px #696969' }}>
                <details>
                    <summary type="radio" className="syukatsu" style={caseDesign1}>就活</summary>
                    <fieldset style={{border :"none"}}>
                    {ButtonTitle.map((value,index)=>{
                        return(
                            <RadioElement
                                selectedIndex = {selectedIndex}
                                setSelectedIndex = {setSelectedIndex}
                                title={value.title}
                                button={value.button}
                                setter={menuStatusSetter}
                                key={index}
                            />
                        )
                    })}
                    </fieldset>
                </details>
            </div>
        </div>

    )
}

export default SideBar;