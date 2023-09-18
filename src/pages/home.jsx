import Header from "@/components/header"
import BasicInput from "@/components/companyNameInput"
import CreateBtn from "@/components/createBtn"
import YourNameInput from "../components/yourNameInput"
import Square from "../components/square"
import StartDatePicker from "../components/startDatePicker"
import Apology from "../components/apology"
import Refusal from "../components/refusal"
import Accept from "@/components/accept"
import Thanks from "@/components/thanks"
import Application from "@/components/application"
import {useState} from "react";

import SideBarDesign from "../components/side2"
import AdjustSchedulePane from "@/components/answerPane/AdjustSchedulePane";
import ThanksPane from "@/components/answerPane/ThanksPane";
import ApologyPane from "@/components/answerPane/ApologyPane";
import RefusalPane from "@/components/answerPane/RefusalPane";
import AcceptPane from "@/components/answerPane/AcceptPane";

export default function Home() {
    const [paneState, setPaneState] = useState('日程調節');

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'stretch'}}>
            <SideBarDesign menuStatusSetter={setPaneState}/>

            <div style={{width: '85%'}}>

                <Header/>

                {(function () {
                    switch (paneState) {
                        case '日程調節':
                            return <AdjustSchedulePane/>
                        case '謝罪':
                            return <ApologyPane/>;
                        case '辞退':
                            return <RefusalPane/>;
                        case 'お礼':
                            return <ThanksPane/>
                        case '承諾':
                            return <AcceptPane/>
                        default:
                            return <div>Default Condition</div>;
                    }
                })()}
            </div>
            <Square/>
        </div>
    )
}
