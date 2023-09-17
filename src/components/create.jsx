import Router from 'next/router'

export default function Create() {

    const createClick = () => {
        Router.push('../mailedit')
    }

    return (
        <>
        {/* <div style={{ width: '100%' }}>
            <div style={{ width: '50%', margin: 'auto', marginTop: '10%' }}>
                <button onClick={createClick} style={{ border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: "#C5E99B", color: 'white', marginLeft: 200, fontWeight: 'bold', cursor: 'pointer' }}>生成</button>

            </div>
        </div> */}
        <div style={{ width: '100%', textAlign:'center', marginTop: '10%' }}>
        <button onClick={createClick} style={{paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, border: 'none', background: "#C5E99B", color: 'white', cursor: 'pointer'}}>生成</button>
        </div>


        </>
    )
}