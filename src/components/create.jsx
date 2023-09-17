import Router from 'next/router'

export default function Create(props) {
    const createClick = () => {
        Router.push('../mailedit')
        // console.log(props.companyName)
    }

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
                <button onClick={createClick} style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 30, borderRadius: 10, fontWeight: 'bold',padding: '0.30em 0.6em', textDecoration: 'none', border: 'none', background: "#77af9c", color: 'white', cursor: 'pointer', border: 'solid 3px #2e8b57' }}>&lt; 生成</button>
            </div>
        </>
    )
}
