import { useState } from "react";

export default function Thanks() {

    const [data, setData] = useState('');
    const handle = (event) => {
        setData(event.target.value)
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '70%', marginLeft: '15%', marginTop: '10%' }}>
                <p style={{ fontSize: 20 }}>お礼の理由(選択)</p>
                <select value={data} onChange={handle}>
                    <option>-選択してください-</option>
                    <option>インターンシップへの参加のお礼</option>
                    <option>面談のお礼</option>
                    <option>企業説明会のお礼</option>
                    <option>その他</option>
                </select>
            </div>
            {(data === 'その他') &&
                <div style={{ width: '70%', margin: 'auto', marginTop: 10 }}>
                    <p style={{ fontSize: 20 }}>お礼の理由(記述)</p>
                    <div><input placeholder="例：働くうえでの心構えができた" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
                </div>
            }

            <div>
                
            </div>
        </div>
    )
}