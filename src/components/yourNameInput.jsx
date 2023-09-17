export default function YourNameInput(props) {

    const updateMajorName = (e) => {
        props.setMajorName(e.target.value)
    }

    const updateName = (e) => {
        props.setName(e.target.value)
    }

    return (
        <div style={{ width: '100%', paddingLeft: '15%', marginTop: 10 }}>
            <div style={{ width: '40%', margin: 'auto', float: "left" }}>
                <p style={{ fontSize: 20 }}>所属</p>
                <div><input onChange={updateMajorName} placeholder="例：立命館大学 情報理工学部 情報理工学科" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
            </div>
            <div style={{ width: '30%', margin: 'auto', float: "left", marginLeft: '10%' }}>
                <p style={{ fontSize: 20 }}>あなたの名前</p>
                <div><input onChange={updateName} placeholder="例：山田太郎" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16 }}></input></div>
            </div>
        </div>
    )
}