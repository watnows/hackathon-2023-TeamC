import React, { useState } from "react";
import { styled } from "styled-components";
import Router from 'next/router'

const StyledTextArea=styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    resize: none; 
    background: #D9D9D9; 
    outline: none;
    &::-webkit-scrollbar {
        background-color: lightgray;
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow:0 0 5px gray inset ;
    }
    &::-webkit-scrollbar-thumb {
        background: #7D7D7D;
        border-radius: 5px;
    }
`

export default function Mailedit() {
    const [titletext, setTitletext] = useState("title");
    const [maintext, setMaintext] = useState("mail");
    const [judge, setJudge] = useState(true);
    const [buttoncolor, setColor] = useState("#77af9c");

    const copyText = async () => {
        await global.navigator.clipboard.writeText(maintext)

        if(buttoncolor == "#D9D9D9") {
            setColor("#77af9c")
        }
        if(judge == false){
            setJudge(true)
        }

        window.alert("copied!")
    }

    const onHandleSetTitleText = (e) => {
        setTitletext(e.target.value)
    }

    const onHandleSetText = (e) => {
        setMaintext(e.target.value)
    }

    const pushEdit = () => {
        setJudge(!judge)
        if (buttoncolor == "#77af9c") {
            setColor("#D9D9D9")
        } else {
            setColor("#77af9c")
        }
    }

    const backClick = () => {
        Router.push('/home')
    }

    const sendClick = () => {
        Router.push('mailto:?subject=件名&body=メールの本文');
        console.log('送信')
        console.log("mailto:?subject="+titletext+"&body="+maintext)
        //Router.push("mailto:?subject="+titletext+"&body="+maintext)
    }

    return (
        <div style={{ width: '100%', height: "100vh" }}>
        <div style={{ width: '100%', height: '10%', float: 'right', background: '#8CD790', border: 'dashed 5px #2e8b57'}}>
        <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
        <div style={{ color: 'white', fontSize: 45, textAlign: 'center', letterSpacing: 8, fontFamily: 'Nico Moji', marginTop: 5 }}>シューカツメールつくるくん</div>
        </div>
            <img onClick={backClick} src="/logo_undo.svg" style={{ height: 50 }}></img>
            <div style={{width: '70%', margin: 'auto', marginTop: 35, height: '5%'}}>
                <input disabled={judge} onChange={onHandleSetTitleText} style={{width: '95%', height: '100%', border: 'none', resize: 'none', background: '#D9D9D9', outline: 'none'}} value={titletext}></input>
            </div>
            <div style={{width: '70%', margin: 'auto', marginTop: 5, height: '55%', position: 'relative' }} className="scroll-mail"><div style={{ width: '95%', height: '100%', float: 'left' }}>
                <StyledTextArea disabled={judge} onChange={onHandleSetText} value={maintext}/></div>
                <img src="/logo_copy.svg" style={{ width: '5%', position: 'absolute', bottom: 0, right: 0}} onClick={copyText}></img>
            </div>
            <div style={{ float: "left", marginTop: 60, width: '100%', textAlign: 'center' }}>
                <button style={{ letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: buttoncolor, color: 'white', marginRight: 200, fontWeight: 'bold', border: 'solid 3px #2e8b57' }} onClick={pushEdit}>編集</button>
                <button style={{ letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: "#77af9c", color: 'white', marginLeft: 200, fontWeight: 'bold', border: 'solid 3px #2e8b57' }} onClick={sendClick}>送信</button>
            </div>
        </div>
    )
}
