// 内定辞退

// 下のような型のデータを受け取る
//     company: string,
//     contact_person_name: string,
//     name: string,
//     belonging: string,
//     reason: string,

import {useState} from "react";
import Router from "next/router";
import {makeMsgToAskToRefuse} from "@/lib/apiUtil";
import Loading from "@/components/loading";
import CompanyNameInput from "@/components/companyNameInput";
import ContactPersonNameInput from "@/components/contactPersonNameInput";
import BelongingInput from "@/components/belongingInput";
import YourNameInput from "@/components/yourNameInput";
import Refusal from "@/components/refusal";
import CreateBtn from "@/components/createBtn";

const RefusalPane = (props) => {
    const [companyName, setCompanyName] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [name, setName] = useState('');
    const [belonging, setBelonging] = useState('');
    const [reason, setReason] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    async function submit() {
        setIsLoading(true);
        const result = await makeMsgToAskToRefuse(
            companyName,
            contactPersonName,
            name,
            belonging,
            reason
        );

        await Router.push("/mailedit?title=" + encodeURIComponent(result.title) + "&content=" + encodeURIComponent(result.content));

        setIsLoading(false);

    }


    return (
        <div>
            {isLoading && <Loading/>}
            <div style={{display: "flex", width: "100%", padding: '2vh', justifyContent: "center", gap: 20}}>
                <CompanyNameInput setter={setCompanyName} widthRatio={40}/>
                <ContactPersonNameInput setter={setContactPersonName} widthRatio={40}/>
            </div>
            <div style={{display: "flex", width: "100%", padding: "2vh", justifyContent: "center", gap: 20}}>
                <BelongingInput setter={setBelonging} widthRatio={40}/>
                <YourNameInput setter={setName} widthRatio={40}/>
            </div>
            <Refusal setter={setReason}/>
            <CreateBtn onClick={submit}/>

        </div>
    )


}

export default RefusalPane;
