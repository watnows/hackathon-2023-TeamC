export default function Frame(props) {

    const updateCompanyName = (e) => {
        props.setCompanyName(e.target.value)
    }
    return (
        <div style={{width: '100%'}}>
            <div style={{width: '70%', margin:'auto', marginTop:'10%'}}>
                <p style={{fontSize: 20}}>企業名(担当者の名前)</p>
                <div><input onChange={updateCompanyName} placeholder= "例：watnow" style={{width:'100%', height: '10%', padding:20, fontSize: 16}}></input></div>
            </div>
        </div>

    )
}