

export default function Mailedit() {
    return (
        <div style={{width: '100%', height: "100vh", overflow: "hidden"}}>
            <div style={{ background: '#8cd790' }}>
                <div style={{ color: 'white', fontSize: 38, fontWeight: "lighter", letterSpacing: 5, textAlign: 'center' }}>就活メールつくるくん</div>
            </div>
            <img src="/logo_undo.svg" style={{height: 50}}></img>
            <div style={{ background: 'lightgray', width: '70%', margin: 'auto', marginTop: 35, height: '50%', overflow: 'scroll'}} className="scroll-mail">aaa<span></span></div>
        </div>
    )
}
