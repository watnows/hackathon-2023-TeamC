

export default function Mailedit() {
    return (
        <div style={{width: '100%', height: "100vh"}}>
            <div style={{ background: '#8cd790'}}>
                <div style={{ color: 'white', fontSize: 38, fontWeight: "lighter", letterSpacing: 5, textAlign: 'center' }}>就活メールつくるくん</div>
            </div>
            <img src="/logo_undo.svg" style={{height: 50}}></img>
            <div style={{background: 'lightgray', width: '70%', margin: 'auto', marginTop: 35, height: '60%', overflow: 'scroll', position: 'relative'}} className="scroll-mail"><div style={{width: '95%', float: 'left'}}>aaa</div><img src="/logo_copy.svg" style={{width: '5%', position: 'absolute', bottom: 10, right: 10}}></img></div>
            <div style={{float: "left", marginTop: 60, width: '100%', textAlign: 'center'}}>
                <button style={{border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: '#C5E99B', color:'white', marginRight: 200, fontWeight: 'bold'}}>編集</button>
                <button style={{border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: '#C5E99B', color:'white', marginLeft: 200, fontWeight: 'bold'}}>送信</button>
            </div>
        </div>
    )
}
