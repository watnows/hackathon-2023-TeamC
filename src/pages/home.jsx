import Header from "@/components/header"
import Frame from "@/components/frame"
import Create from "@/components/create"
import YourNameInput from "../components/yourNameInput"
import Square from "../components/square"
import Date from "../components/date"
import Apology from "../components/apology"
import Refusal from "../components/refusal"
import Accept from "@/components/accept"
import Thanks from "@/components/thanks"
import Application from "@/components/application"
import {useState} from "react";

import SideBarDesign from "../components/side2"

export default function Home() {
    const [paneState, setPaneState] = useState('日程調節');

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'stretch'}}>
            <SideBarDesign menuStatusSetter={setPaneState}/>

            <div style={{width: '85%'}}>

                <Header/>

                {(function () {
                    switch (paneState) {
                        case '日程調節':
                            return <AdjustSchedulePane/>;
                        case '謝罪':
                            return <ApologyPane/>;
                        case '辞退':
                            return <RefusalPane/>;
                        case 'お礼':
                            return <ThanksPane/>
                        case '承諾':
                            return <AcceptPane/>
                        case '応募':
                            return <ApplicationPane/>
                        default:
                            return <div>Default Condition</div>;
                    }
                })()}

                <Create/>
            </div>
            <Square/>
        </div>
    )
}

function AdjustSchedulePane() {
    return (
        <div>
            <Frame/>
            <YourNameInput/>
            <Date/>
        </div>
    )
}

function ApologyPane() {
    return (
        <div>
            <Frame/>
            <YourNameInput/>
            <Apology/>
        </div>
    )
}

function RefusalPane() {
    return (
        <div>
            <Frame/>
            <YourNameInput/>
            <Refusal/>
        </div>
    )
}

function ThanksPane() {
    return (
        <div className="お礼">
            <Thanks/>
        </div>
    )
}

function AcceptPane() {
    return (
        <div className="承諾">
            <Accept/>
        </div>
    )
}

function ApplicationPane() {
    return (
        <div className="応募">
            <Application/>
        </div>
    )
}