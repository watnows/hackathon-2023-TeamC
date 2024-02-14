import React, {useState} from "react";



export default function StartDatePicker(props) {

    // これらにはLocalDateとして保存する→最後の時点でLocalDateをUNIX時間に変換して送信する
    const [inputStartDate, setInputStartDate] = useState("");
    const [inputEndDate, setInputEndDate] = useState("");

    const handleOnStartDateInput = (e) => {
        setInputStartDate(e.target.value);
    }

    const handleOnEndDateInput = (e) => {
        setInputEndDate(e.target.value);
    }

    const handleClickedBtn = (e) => {
        if (inputStartDate === "") {
            window.alert("開始時刻に何も入力されていません")
        } else if (inputEndDate === "") {
            window.alert("終了時刻に何も入力されていません")
        } else {
            // UNIX時間に変換してから
            const startUnixTime = Math.floor(new Date(inputStartDate).getTime() / 1000);
            const endUnixTime = Math.floor(new Date(inputEndDate).getTime() / 1000);

            // 配列に追加する
            props.setter(prevItems => [...prevItems, {start_date: startUnixTime, end_date: endUnixTime}])

            // リセット
            setInputStartDate("");
            setInputEndDate("");
        }
    }

    return (
        <div style={{display: 'flex', padding: '2vh'}}>
            <div style={{float: 'left'}}>
                <p style={{fontSize: 20, color:'#757575'}}>新しい日程</p>
                <div style={{display: "flex", flexFlow: 'column', textAlign: 'center', backgroundColor:'#8CD790', color: 'white', borderRadius: 8, opacity: 0.7}}>
                    <input style={{margin:5, marginTop:10, borderRadius: 10, border: 'none'}} value={inputStartDate} onChange={handleOnStartDateInput}
                           type="datetime-local"/> &nbsp;~&nbsp;
                    <input style={{margin:5, marginBottom:10, borderRadius: 10, border: 'none'}} value={inputEndDate} onChange={handleOnEndDateInput} type="datetime-local"/>
                </div>
            </div>
            <div style={{position: "relative"}}>

                <button style={{width: '4rem', height: '2rem', marginLeft: '2rem', marginTop: '2rem', border: 'none', backgroundColor: '#8CD790', borderRadius: 25, color: 'white', boxShadow: "0 2px 4px rgba(0,0,0,0.3)", position: 'absolute', bottom: 0}}
                        onClick={handleClickedBtn}>追加
                </button>
            </div>

        </div>
    )
}