import Header from "@/components/header"
import Frame from "@/components/frame"
import Create from "@/components/create"
import YourNameInput from "../components/yourNameInput"
import Square from "../components/square"
import Date from "../components/date"
import Apology from "../components/apology"
import Refusal from "../components/refusal"

import SideBarDesign from "../components/side"
import {useEffect, useState} from "react";

export default function Home() {
    const [paneState, setPaneState] = useState('日程調節');
    const [companyName, setCompanyName] = useState('');
    const [majorName, setMajorName] = useState('');
    const [name, setName] = useState('');
    const [dateandtime, setDateandtime] = useState([]);

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'stretch'}}>
            <SideBarDesign menuStatusSetter={setPaneState}/>

            <div style={{width: '85%'}}>

                <Header/>

                {(function () {
                    switch (paneState) {
                        case '日程調節':
                            return <AdjustSchedulePane
                            setCompanyName={setCompanyName} setMajorName={setMajorName} setName={setName} setDateandtime={setDateandtime} dateandtime={dateandtime} />;
                        case '謝罪':
                            return <ApologyPane/>;
                        case '辞退':
                            return <RefusalPane/>;
                        default:
                            return <div>Default Condition</div>;
                    }
                })()}

                <Create
                companyName={companyName} majorName={majorName} name={name} dateandtime={dateandtime} />
            </div>
            <Square/>
        </div>
    )
}

function AdjustSchedulePane(props) {
    return (
        <div>
            <Frame
            setCompanyName={props.setCompanyName}/>
            <YourNameInput  
            setCompanyName={props.setMajorName} setMajorName={props.setMajorName} setName={props.setName} />
            <Date setDateandtime={props.setDateandtime} dateandtime={props.dateandtime} />
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