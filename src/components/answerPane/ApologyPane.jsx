import BasicInput from "@/components/companyNameInput";
import CompanyNameInput from "@/components/companyNameInput";
import {useState} from "react";
import {makeMsgToApology} from "@/lib/apiUtil";
import Router from "next/router";
import ContactPersonNameInput from "@/components/contactPersonNameInput";
import BelongingInput from "@/components/belongingInput";
import YourNameInput from "@/components/yourNameInput";
import Loading from "@/components/loading";
import CreateBtn from "@/components/createBtn";
import Apology from "@/components/apology";

// 下の型を満たす値が必要
//     company: string,
//     belonging: string,
//     contact_person_name: string,
//     name: string,
//     what: string,
//     situation: string


const ApologyPane = () => {
    const [companyName, setCompanyName] = useState('');
    const [belonging, setBelonging] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [name, setName] = useState('');
    const [what, setWhat] = useState("");
    const [situation, setSituation] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    async function submit() {
        if (companyName === "" || belonging === "" || contactPersonName === "" || name === "" || what === "" || situation === "") {
            alert("全ての項目を入力してください");
            return;
        }

        setIsLoading(true);
        const result = await makeMsgToApology(
            companyName,
            belonging,
            contactPersonName,
            name,
            what,
            situation
        );
        await Router.push("/mailedit?title=" + encodeURIComponent(result.title) + "&content=" + encodeURIComponent(result.content));

        setIsLoading(false);
    }

    return(
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
            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <div style={{width: "80%", padding: '2vh 2vh 2vh 1vh' }}>
                    <p style={{fontSize: 20}}>何について</p>
                    <textarea onChange={(e) => setWhat(e.target.value)} placeholder="例：提出物"
                              style={{width: "100%", height: "10vh", border: "solid 3px #c5e998", borderRadius: "10px"}} value={what}/>
                </div>
            </div>
            <Apology setter={setSituation}/>
            <CreateBtn onClick={submit}/>

        </div>
    )
}

export default ApologyPane;

