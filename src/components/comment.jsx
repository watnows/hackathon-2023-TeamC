export default function Comment() {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '70%', margin: 'auto', marginTop: '10%' }}>
                <p style={{ fontSize: 20 }}>自由記述欄</p>
                <div><input placeholder="例：" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
            </div>
        </div>
    )
}