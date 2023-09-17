import React, { useState } from "react";

export default function Date() {

    const [count, setCount] = useState([0]);

    const plusClick = () => {
        setCount(count => [...count, 0]);
    }



    return (
        <div style={{ width: '100%', marginTop: '10%', marginLeft:'15%', display: 'flex'}}>
            <div style={{width: '30%'}}>
                {count.map((_, index)=>{
                    return(
                        <div key={index}>
                            <RepeatDate/>
                        </div>
                    )
                })}
                {/* <div style={{float: 'left'}}>
                    <p style={{ fontSize: 20 }}>日付選択</p>
                    <input type="date" />
                </div>

                <div style={{marginLeft:'15%'}}>
                    <p style={{ fontSize: 20 }}>時刻選択</p>
                    <input type="time" />
                </div> */}
            </div>
            <button onClick={plusClick} style={{height: '5%'}}  disabled={count.length > 3}>＋</button>
        </div>
    )
}

function RepeatDate() {
    return (
        <div style={{display: 'flex', width: '30%'}}>
                <div style={{float: 'left'}}>
                    <p style={{ fontSize: 20 }}>日付選択</p>
                    <input type="date" />
                </div>

                <div style={{marginLeft:'15%'}}>
                    <p style={{ fontSize: 20 }}>時刻選択</p>
                    <input type="time" />
                </div>
        </div>
    )
}