export default function BelongingInput(props) {
    const handleOnChange = (e) => {
        props.setter(e.target.value);
    }

    return (
        <div style={{width: `${props.widthRatio}%`}}>
            <p style={{fontSize: 20}}>所属</p>
            <div>
                <input onChange={handleOnChange} placeholder="例：立命館大学 情報理工学部 情報理工学科"
                       style={{width: '100%', height: '10%', padding: 20, fontSize: 16}}></input>
            </div>
        </div>
    )
}