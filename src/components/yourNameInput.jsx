import React, { useEffect, useState } from 'react';

export default function YourNameInput(props) {
    const[yourName, setYourName] = useState('');
    useEffect(() => {
        const storedYourName = localStorage.getItem('yourName');
        if(storedYourName) {
            setYourName(storedYourName);
            props.setter(storedYourName);
        }
    }, []);

    const handleOnChange = (e) => {
        setYourName(e.target.value);
        props.setter(e.target.value);

        localStorage.setItem('yourName', e.target.value);
    }

    return (
        <div style={{width: `${props.widthRatio}%`}}>
            <p style={{fontSize: 20, color:'#757575'}}>あなたの名前</p>
            <div><input value={yourName} onChange={handleOnChange} placeholder="例：山田太郎"
                        style={{width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #77af9c", borderRadius: "10px"}}></input></div>
        </div>
    )
}