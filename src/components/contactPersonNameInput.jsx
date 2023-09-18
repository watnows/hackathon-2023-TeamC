export default function ContactPersonNameInput(props) {
    const handleOnChange = (e) => {
        props.setter(e.target.value)
    }
    return (
        <div style={{width: `${props.widthRatio}%`}}>
            <p style={{fontSize: 20}}>担当者名</p>
            <div>
                <input onChange={handleOnChange} placeholder="例：野火のびた"
                       style={{width: '100%', height: '10%', padding: 20, fontSize: 16}}></input>
            </div>
        </div>
    )
}