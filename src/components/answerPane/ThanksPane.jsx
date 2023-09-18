// 以下の型を満たすこと
// type ThankRequestType = {
//     company: string,
//     contact_person_name: string,
//     reason: string,
//     name: string,
//     belonging: string
// }

import {useState} from "react";
import Router from "next/router";
import {makeMsgToThank} from "@/lib/apiUtil";
import ContactPersonNameInput from "@/components/contactPersonNameInput";
import CompanyNameInput from "@/components/companyNameInput";
import Loading from "@/components/loading";
import BelongingInput from "@/components/belongingInput";
import YourNameInput from "@/components/yourNameInput";
import Thanks from "@/components/thanks";
import CreateBtn from "@/components/createBtn";

export default function ThanksPane() {
    const [companyName, setCompanyName] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [name, setName] = useState('');
    const [belonging, setBelonging] = useState('');
    const [reason, setReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function submit() {
        setIsLoading(true);
        const result = await makeMsgToThank(
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
            <Thanks setter={setReason}/>
            <CreateBtn onClick={submit}/>
        </div>
    )
}

