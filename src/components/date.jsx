export default function Date() {
    return (
        <div style={{ width: '100%', marginTop: '10%', marginLeft:'15%',}}>
            <div>
                <div style={{float: 'left'}}>
                    <p style={{ fontSize: 20 }}>日付選択</p>
                    <input type="date" />
                </div>

                <div style={{marginLeft:'15%'}}>
                    <p style={{ fontSize: 20 }}>時刻選択</p>
                    <input type="time" />
                </div>
            </div>
        </div>
    )
}