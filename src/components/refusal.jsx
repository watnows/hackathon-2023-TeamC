export default function Refusal() {

    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '70%', marginLeft: '15%', marginTop: '10%' }}>
                <p style={{ fontSize: 20 }}>辞退理由</p>
                <select>
                    <option value="">-選択してください-</option>
                    <optgroup label="理由">
                        <option value="">より志望度が高い他者から内定をもらった</option>
                        <option value="">希望していた職種ではなかった</option>
                        <option value="">志望業界が変わった</option>
                        <option value="">提示いただいた条件との折り合いがつかなかった</option>
                        <option value="">家庭の事情</option>
                        <option value="">その他</option>
                    </optgroup>
                </select>
            </div>

            <div style={{ width: '70%', margin: 'auto', marginTop: 10 }}>
                <p style={{ fontSize: 20 }}>辞退理由(記述)</p>
                <div><input placeholder="例：希望の勤務地ではなかったため" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
            </div>
        </div>

    )
}