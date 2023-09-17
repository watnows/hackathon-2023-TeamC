import React, { useState } from "react"

export default function Apology() {
    const [data, setData] = useState('');
    const handle = (event) => {
        setData(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '70%', marginLeft: '15%', marginTop: '10%' }}>
                <p style={{ fontSize: 20 }}>謝罪理由(選択)</p>
                <select value={data} onChange={handle}>
                    <option>-選択してください-</option>
                    <option>欠席</option>
                    <option>遅刻</option>
                    <option>その他</option>
                </select>
            </div>
            {(data === 'その他') && (
                <div style={{ width: '70%', margin: 'auto', marginTop: 10 }}>
                    <p style={{ fontSize: 20 }}>謝罪理由(記述)</p>
                    <div>
                        <input placeholder="例：電車が遅延していたため" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input>
                    </div>
                </div>
            )}
        </div>
    )
}