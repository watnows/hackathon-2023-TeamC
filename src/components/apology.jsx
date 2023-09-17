export default function Apology() {
    return (
        <>
            <div style={{ width: '100%' }}>
                <div style={{ width: '70%', marginLeft: '15%', marginTop: '10%' }}>
                    <p style={{ fontSize: 20 }}>謝罪理由(選択)</p>
                    <select name="apologyReason">
                        <option value="">-選択してください-</option>
                        <optgroup label="理由">
                            <option value="">欠席</option>
                            <option value="">遅刻</option>
                            <option value="">その他</option>

                        </optgroup>
                    </select>
                </div>
                <div style={{ width: '70%', margin: 'auto', marginTop: 10 }}>
                    <p style={{ fontSize: 20 }}>謝罪理由(記述)</p>
                    <div><input placeholder="例：電車が遅延していたため" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
                </div>
            </div>
        </>
    )
}