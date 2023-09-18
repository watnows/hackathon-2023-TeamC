const pastDatePicker = (props) => {
    return (
        <div>
            <p style={{fontSize:20}}>過去の日程の選択</p>
            <div style={{display: "flex"}}>
                <input onChange={(e) => {
                    const value = e.target.value;
                    const startUnixTime = Math.floor(new Date(value).getTime() / 1000);
                    // 入力されたらUNIXタイムとしてセット
                    props.setter(prev => ({start_date: startUnixTime, end_date: prev.end_date}))
                }} type={"datetime-local"}/> &nbsp;~&nbsp;
                <input onChange={(e) => {
                    const value = e.target.value;
                    const endUnixTime = Math.floor(new Date(value).getTime() / 1000);
                    // 入力されたらUNIXタイムとしてセット
                    props.setter(prev => ({start_date: prev.start_date, end_date: endUnixTime}))
                }} type={"datetime-local"}/>
            </div>
        </div>
    )
}

export default pastDatePicker;