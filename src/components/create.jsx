import Router from 'next/router'

export default function Create(props) {

    const createClick = () => {
        Router.push('../mailedit')
        console.log(props.companyName)
    }

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
                <button onClick={createClick} style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, border: 'none', background: "#C5E99B", color: 'white', cursor: 'pointer' }}>生成</button>
            </div>


        </>
    )
}