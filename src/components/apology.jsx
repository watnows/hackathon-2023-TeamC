import React, { useState } from "react"

export default function Apology(props) {
    const [data, setData] = useState('');
    const handle = (event) => {
        props.setter(event.target.value);
        setData(event.target.value)
        console.log(event.target.value)
    };

    return (
        <div style={{ width: '100%', display: 'flex', padding: '2vh' }}>
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
            {data && data !== '-選択してください-' &&(
                <div style={{ width: '65%'}}>
                    <p style={{ fontSize: 20, color:'#757575'}}>謝罪理由(記述)</p>
                    <div>
                        <input
                            placeholder={
                                data === '欠席' ? "例：急用が入ってしまい、面接に行くことができなかった" :
                                data === '遅刻' ? "例：電車の遅延により、打合せに時間通りに到着できなかった" :
                                data === '提出遅れ' ? "例：パソコンのトラブルにより、提出物を期限内に提出できなかった" :
                                ""
                            }
                            style={{ width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #8cd790", borderRadius: "10px"}}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}