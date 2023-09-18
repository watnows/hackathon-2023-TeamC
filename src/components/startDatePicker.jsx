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
        <div style={{display: 'flex'}}>
            <div style={{float: 'left'}}>
                <p style={{fontSize: 20}}>新しい日程の選択(複数)</p>
                <div style={{display: "flex"}}>
                    <input value={inputStartDate} onChange={handleOnStartDateInput}
                           type="datetime-local"/> &nbsp;~&nbsp;
                    <input value={inputEndDate} onChange={handleOnEndDateInput} type="datetime-local"/>
                </div>
            </div>
            <div>
                <button style={{width: '4rem', height: '2rem', marginLeft: '1rem', marginTop: '2rem'}}
                        onClick={handleClickedBtn}>追加
                </button>
            </div>

        </div>
    )
}