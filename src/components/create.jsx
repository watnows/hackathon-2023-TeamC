import Router from 'next/router'

export default function Create(props) {

    const createClick = () => {
        Router.push('../mailedit')
        console.log(props.companyName)
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '50%', margin: 'auto', marginTop: '3%' }}>
                <button onClick={createClick} style={{ border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: "#C5E99B", color: 'white', marginLeft: 200, fontWeight: 'bold', cursor: 'pointer' }}>生成</button>

            </div>
        </div>

    )
}