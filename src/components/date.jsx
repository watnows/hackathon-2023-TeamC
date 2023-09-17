import React, { useState } from "react";

export default function Date(props) {

    return (
        <div style={{ width: '100%', marginTop: '10%', paddingLeft: '15%', display: 'flex' }}>
            <RepeatDate setDateandtime={props.setDateandtime} dateandtime={props.dateandtime} />
        </div>
    )
}

function RepeatDate(props) {

    const [inputDate, setinputDate] = useState("")

    const handleSetInputDate = (e) => {
        setinputDate(e.target.value)
    }

    const updateDate = (e) => {
        props.setDateandtime([...props.dateandtime, inputDate]);
        setinputDate("")
    }

    const updateTime = (e) => {
        console.log(e.target.value)
    }
    return (
        <div style={{ display: 'flex', width: '30%' }}>
            <div style={{ float: 'left' }}>
                <p style={{ fontSize: 20 }}>日付選択</p>
                <input value={inputDate} onChange={handleSetInputDate} type="datetime-local" />
                <div style={{marginTop:'1rem'}}>
                    {props.dateandtime.map((date, index) => {
                        return (
                            <div style={{marginTop:'5px', padding:'0.2rem',border:'1px solid #333', borderRadius:'10px' }} key={index}>
                                <p>{date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <button style={{ width: '4rem', height: '2rem', marginLeft: '1rem', marginTop: '2rem' }} onClick={updateDate}>追加</button>
            </div>

        </div>
    )
}