import React, {useEffect, useState} from "react";

function StartDateInput(props) {
        // これらにはLocalDateとして保存する→最後の時点でLocalDateをUNIX時間に変換して送信する
        const [inputStartDate, setInputStartDate] = useState("");
        const [inputEndDate, setInputEndDate] = useState("");
        
    
        const handleOnStartDateInput = (e) => {
            setInputStartDate(e.target.value);
            props.updateStartDateArray(e.target.value, "start", props.index);
        }
    
        const handleOnEndDateInput = (e) => {
            setInputEndDate(e.target.value);
            props.updateStartDateArray(e.target.value, "end", props.index);
        }

        const handleOnClickDelete = () => {
            props.setter(props.newDatesArray.filter((_, index) => (index !== props.index)));
        }
    
        return (
            <div style={{display: 'flex', paddingRight: '2vh'}}>
                <div style={{float: 'left'}}>
                <p style={{fontSize: 20, color:'#757575'}}>
                新しい日程{props.newDatesArray.length - 1 === props.index && (
                <span>
                    <button onClick={handleOnClickDelete} style={{color: 'red', border: 'none', backgroundColor: 'transparent', borderRadius: '50%', float: 'right', position: 'relative', padding: 0}}>×</button>
                </span>
                )}
                </p>
                    <div style={{display: "flex", flexFlow: 'column', textAlign: 'center', backgroundColor:'#8CD790', color: 'white', borderRadius: 8, opacity: 0.7, width: '100%'}}>
                    <input style={{margin:5, marginTop:10, borderRadius: 10, border: 'none'}} value={inputStartDate} onChange={handleOnStartDateInput}
                    type="datetime-local"/> &nbsp;~&nbsp;
                    <input style={{margin:5, marginBottom:10, borderRadius: 10, border: 'none'}} value={inputEndDate} onChange={handleOnEndDateInput} type="datetime-local"/>
                    </div>
                </div>
            </div>
        )
}

export default function StartDatePicker(props) {

    const handleClickedBtn = () => {
        props.setter(prevItems => [...prevItems, {start_date: undefined , end_date: undefined}]);
    }

    const updateStartDateArray = (inputDate, state, index) => {
        const UnixTime = Math.floor(new Date(inputDate).getTime() /1000);
        props.setter((prevItems) =>
            prevItems.map((p, i) =>
                i === index
                    ? {
                        key:index,
                        start_date: state === "start" ? UnixTime : p.start_date,
                        end_date: state === "end" ? UnixTime : p.end_date,
                    }
                    : p
            )
        );
    }

    return (
        <div style={{display: 'flex', padding: '0 2vh'}}>
            {props.newDatesArray.map((_,index) => (<StartDateInput updateStartDateArray={updateStartDateArray} index={index} newDatesArray={props.newDatesArray} setter={props.setter} key={index}/>))}
            <div style={{position: "relative"}}>
                <button style={{width: '4rem', height: '2rem', marginLeft: '2rem', marginTop: '2rem', border: 'none', backgroundColor: '#8CD790', borderRadius: 25, color: 'white', boxShadow: "0 2px 4px rgba(0,0,0,0.3)", position: 'absolute', bottom: 0}}
                        onClick={handleClickedBtn}>追加
                </button>
            </div>
        </div>
    )
}