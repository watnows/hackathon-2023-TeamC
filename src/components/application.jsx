import React, { useState } from "react"

export default function Application() {
    const [data, setData] = useState('');
    const handle = (event) => {
        setData(event.target.value);
        console.log(event.target.value)
    };
    return (
        <>
            <div style={{ width: '100%' }}>
                <div style={{ width: '70%', marginLeft: '15%', marginTop: '10%' }}>
                    <p style={{ fontSize: 20 }}>志望動機</p>
                    <select value={data} onChange={handle}>
                        <option>-選択してください-</option>
                        <option>企業への興味</option>
                        <option>自己成長とキャリアの機会</option>
                        <option>チームワークと協力</option>
                        <option>企業の価値観と合致した</option>
                        <option>専門知識と経験の活用</option>
                        <option>ワークライフバランス</option>
                        <option>給与と福利厚生</option>
                        <option>その他</option>
                    </select>
                </div>
                {(data === 'その他') &&
                    <div style={{ width: '70%', margin: 'auto', marginTop: 10 }}>
                        <p style={{ fontSize: 20 }}>志望動機(記述)</p>
                        <div><input placeholder="例：自身の研究内容と貴社での業務が似ており、経験が活かせる" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
                    </div>
                }
            </div>
        </>
    )
}