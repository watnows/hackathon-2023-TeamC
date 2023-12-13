import React, {useEffect, useState} from "react";
import {styled} from "styled-components";
import {useRouter} from 'next/router'
import Loading from "@/components/loading";

const StyledTextArea = styled.textarea`
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
    box-shadow: 0 0 5px gray inset;
  }

  &::-webkit-scrollbar-thumb {
    background: #7D7D7D;
    border-radius: 5px;
  }
`

export default function Mailedit() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [judge, setJudge] = useState(true);
    const [buttoncolor, setColor] = useState("#8CD790");

    useEffect(() => {
        if (router.isReady) {
            const getTitle = router.query.title;
            const getContent = router.query.content;
            if (getTitle === undefined || getContent === undefined) {
                window.alert("不正なアクセスです")
                router.push('/home')
            } else {
                setTitle(decodeURIComponent(router.query.title))
                setContent(decodeURIComponent(router.query.content))
            }
        }
    }, [router.isReady]);


    const copyText = async () => {
        await global.navigator.clipboard.writeText(content)

        if (buttoncolor == "#D9D9D9") {
            setColor("#8CD790")
        }
        if (judge == false) {
            setJudge(true)
        }

        window.alert("copied!")
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const pushEdit = () => {
        setJudge(!judge)
        if (buttoncolor == "#8CD790") {
            setColor("#D9D9D9")
        } else {
            setColor("#8CD790")
        }
    }

    const backClick = () => {
        router.push('/home')
    }

    const handleSend = () => {
        router.push('mailto:?subject=' + title + '&body=' + content.replaceAll('\n', '%0D%0A'));
    }

    return (
        <>
            {router.isReady ?
                <div style={{width: '100%', height: "100vh", backgroundColor: "#EAF9D8"}}>
                    <div style={{background: '#8cd790',border: 'dashed 4px #77AF9C' }}>
                        <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
                        <div style={{ color: 'white', fontSize: 45, textAlign: 'center', letterSpacing: 8, fontFamily: 'Nico Moji', marginTop: 5 }}>シューカツメールつくるくん</div>

                    </div>
                    <img onClick={backClick} src="/logo_undo.svg" style={{height: 55, color: "#757575", marginLeft: 15, marginTop: 10}}></img>
                    <div style={{width: '60%', margin: 'auto', height: '60%', position: 'relative'}}
                         className="scroll-mail">
                        <div style={{width: '100%', height: '13%'}}>
                            <StyledTextArea style={{backgroundColor: '#FFFFFF', border: "solid 5px #77AF9C", borderRadius: 10}}
                                            disabled={judge}
                                            onChange={handleTitleChange} value={title}/>
                        </div>
                        <div style={{width: '100%', height: '85%', marginTop: "2%"}}>
                            <StyledTextArea style={{backgroundColor: '#FFFFFF', border: "solid 5px #77AF9C", borderRadius: 10}}
                                            disabled={judge}
                                            onChange={handleContentChange} value={content}/>
                        </div>
                        <img src="/logo_copy.svg" style={{width: '5%', position: 'absolute', bottom: 0, right: 0}}
                             onClick={copyText}></img>
                    </div>
                    <div style={{float: "left", marginTop: 50, width: '100%', textAlign: 'center'}}>
                        <button style={{
                            border: 'none',
                            letterSpacing: 3,
                            paddingLeft: 50,
                            paddingRight: 50,
                            paddingTop: 15,
                            paddingBottom: 15,
                            fontSize: 20,
                            borderRadius: 15,
                            background: buttoncolor,
                            color: 'white',
                            marginRight: 200,
                            fontWeight: 'bold',
                            boxShadow: '0px 6px 7px -3px gray'
                        }} onClick={pushEdit}>編集
                        </button>
                        <button style={{
                            border: 'none',
                            letterSpacing: 3,
                            paddingLeft: 50,
                            paddingRight: 50,
                            paddingTop: 15,
                            paddingBottom: 15,
                            fontSize: 20,
                            borderRadius: 15,
                            background: "#8CD790",
                            color: 'white',
                            marginLeft: 200,
                            fontWeight: 'bold',
                            boxShadow: '0px 6px 7px -3px gray'
                        }} onClick={handleSend}>送信
                        </button>
                    </div>
                </div> : <Loading/>
            }
        </>
    )
}
