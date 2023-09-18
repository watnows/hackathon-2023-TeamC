// 内定承諾
// 次のような型を用意
//     company: string,
//     contact_person_name: string,
//     name: string,
//     belonging: string,

import {useState} from "react";
import {makeMsgToAskToReceiveOffer} from "@/lib/apiUtil";
import Loading from "@/components/loading";
import CompanyNameInput from "@/components/companyNameInput";
import ContactPersonNameInput from "@/components/contactPersonNameInput";
import BelongingInput from "@/components/belongingInput";
import YourNameInput from "@/components/yourNameInput";
import CreateBtn from "@/components/createBtn";

const AcceptPane = (props) => {
    const [companyName, setCompanyName] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [name, setName] = useState('');
    const [belonging, setBelonging] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    async function submit() {
        setIsLoading(true);
        const result = await makeMsgToAskToReceiveOffer(
            companyName,
            contactPersonName,
            name,
            belonging,
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
            <CreateBtn onClick={submit}/>
        </div>
    )
}

export default AcceptPane;