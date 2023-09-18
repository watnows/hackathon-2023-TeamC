import {useState} from "react";

export default function Thanks(props) {

    const [data, setData] = useState('');
    const handle = (event) => {
        props.setter(event.target.value)
    };

    return (
        <div style={{width: '100%', display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{width: '70%'}}>
                <p style={{fontSize: 20}}>お礼の理由(選択)</p>
                <select value={data} onChange={handle}>
                    <option>-選択してください-</option>
                    <option>インターンシップへの参加のお礼</option>
                    <option>面談のお礼</option>
                    <option>企業説明会のお礼</option>
                    <option>その他</option>
                </select>
            </div>
            {(data === 'その他') &&
                <div style={{width: '70%', marginTop: 10}}>
                    <p style={{fontSize: 20}}>お礼の理由(記述)</p>
                    <div><input placeholder="例：働くうえでの心構えができた"
                                style={{width: '100%', height: '10%', padding: 20, fontSize: 16}}></input></div>
                </div>
            }
        </div>
    )
}