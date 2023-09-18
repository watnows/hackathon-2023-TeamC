export default function StartDatePresenter(props) {
    return (
        <div>
            {props.newDatesArray.map((date, index) => {
                return (
                    <div style={{
                        marginTop: '5px',
                        padding: '0.2rem',
                        border: '1px solid #333',
                        borderRadius: '10px'
                    }} key={index}>
                        <p>{unixToFormatted(date.start_date)} &nbsp; ~ &nbsp; {unixToFormatted(date.end_date)}</p>
                    </div>
                )
            })}
        </div>
    )
}

// UNIX時間をMM/DD(曜日) HH:mmに変換する関数
function unixToFormatted(unixTimestamp) {
    // UNIX時間をJavaScriptのDateオブジェクトに変換
    const date = new Date(unixTimestamp * 1000);

    // フォーマットの構築
    const month = String(date.getMonth() + 1).padStart(2, '0');  // 月 (0-11を1-12に)
    const day = String(date.getDate()).padStart(2, '0');         // 日
    const days = ['日', '月', '火', '水', '木', '金', '土'];      // 曜日 (日本語)
    const weekday = days[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');      // 時間
    const minutes = String(date.getMinutes()).padStart(2, '0');  // 分

    return `${month}/${day}(${weekday}) ${hours}:${minutes}`;
}