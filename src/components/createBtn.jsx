import Router from 'next/router'

export default function CreateBtn(props) {

    const createClick = () => {
        props.onClick()
    }

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
                <button onClick={createClick} style={{ padding: '15px 50px', border: 'none', background: "#8CD790", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.3)",  color: 'white', cursor: 'pointer' }}>生成</button>
            </div>
        </>
    )
}