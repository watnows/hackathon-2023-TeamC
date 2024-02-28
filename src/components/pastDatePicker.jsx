const pastDatePicker = (props) => {
    return (
        <div style={{width: '100%'}}>
        <div style={{}}>
            <p style={{fontSize:20, color:'#757575'}}>元の日程</p>
            <div style={{display: "flex",flexFlow: 'column', textAlign: 'center', backgroundColor:'#77AF9C', color: 'white', borderRadius: 8, opacity: 0.7}}>
                <input style={{margin:5, marginTop:10, borderRadius: 10, border: 'none'}} onChange={(e) => {
                    const value = e.target.value;
                    const startUnixTime = Math.floor(new Date(value).getTime() / 1000);
                    // 入力されたらUNIXタイムとしてセット
                    props.setter(prev => ({start_date: startUnixTime, end_date: prev.end_date}))
                }} type={"datetime-local"}/> &nbsp;~&nbsp;
                <input style={{margin:5, marginBottom:10, borderRadius: 10, border: 'none'}} onChange={(e) => {
                    const value = e.target.value;
                    const endUnixTime = Math.floor(new Date(value).getTime() / 1000);
                    // 入力されたらUNIXタイムとしてセット
                    props.setter(prev => ({start_date: prev.start_date, end_date: endUnixTime}))
                }} type={"datetime-local"}/>
            </div>
        </div>
        </div>
    )
}

export default pastDatePicker;