export default function Frame() {
    return (
        <div style={{ display: 'inline-block', position: 'relative', width: 500, height: 132, marginLeft: 641, marginTop: 364 }}>
            <div style={{ position: 'absolute', top: 25, left: 0, width: 500, height: 107, background: '#D9D9D9', borderRadius: 30 }} />
            <div style={{ position: 'absolute', top: 0, left: 28, width: 200, height: 25, color: 'rgba(0, 0, 0, 0.60)', fontSize: 20, fontFamily: 'Inter', fontWeight: '400' }}>企業名(担当者の名前)</div>
            <div style={{ position: 'absolute', top: 63, left: 21, width: 401, height: 40, color: 'rgba(0, 0, 0, 0.58)', fontSize: 24, fontFamily: 'Inter', fontWeight: '400' }}>例：watnow</div>
        </div>

    )
}