import React, { useState } from "react"

export default function Apology(props) {
    const [data, setData] = useState('');
    const handle = (event) => {
        props.setter(event.target.value);
        setData(event.target.value)
        console.log(event.target.value)
    };

    return (
        <div style={{ width: '100%', display: 'flex', padding: '0 2vh 2vh 1vh' }}>
            <div style={{ width: '15%', marginLeft: '10%'}}>
                <p style={{ fontSize: 20, color:'#757575'}}>謝罪理由(選択)</p>
                <select value={data} onChange={handle} style={{border: "solid 3px #8cd790", borderRadius: "10px"}}>
                    <option> -選択してください- </option>
                    <option>欠席</option>
                    <option>遅刻</option>
                    <option>提出遅れ</option>
                    <option>その他</option>
                </select>
            </div>
            {(data === 'その他') && (
                <div style={{ width: '65%'}}>
                    <p style={{ fontSize: 20, color:'#757575'}}>謝罪理由(記述)</p>
                    <div>
                        <input placeholder="例：電車が遅延していたため" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #8cd790", borderRadius: "10px"}}></input>
                    </div>
                </div>
            )}
        </div>
    )
}