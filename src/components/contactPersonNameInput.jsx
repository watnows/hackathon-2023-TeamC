import React, { useEffect, useState } from 'react';

export default function ContactPersonNameInput(props) {
    const [contactPersonName, setContactPersonName] = useState('');

    useEffect(() => {
        const storedContactPersonName = localStorage.getItem('contactPersonName');
        if (storedContactPersonName) {
            setContactPersonName(storedContactPersonName);
            props.setter(storedContactPersonName);
        }
    }, []);

    const handleOnChange = (e) => {
        setContactPersonName(e.target.value);
        props.setter(e.target.value)

        localStorage.setItem('contactPersonName', e.target.value);
    }
    return (
        <div style={{width: `${props.widthRatio}%`}}>
            <p style={{fontSize: 20, color:'#757575'}}>担当者名</p>
            <div>
                <input value={contactPersonName} onChange={handleOnChange} placeholder="例：野火のびた"
                       style={{width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #8cd790", borderRadius: "10px"}}></input>
            </div>
        </div>
    )
}
