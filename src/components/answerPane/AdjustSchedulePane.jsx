import CreateBtn from "@/components/createBtn";
import YourNameInput from "@/components/yourNameInput";
import BasicInput from "@/components/companyNameInput";
import StartDatePicker from "../startDatePicker"
import CompanyNameInput from "@/components/companyNameInput";
import {useState} from "react";
import ContactPersonNameInput from "@/components/contactPersonNameInput";
import BelongingInput from "@/components/belongingInput";
import StartDatePresenter from "@/components/startDatePresenter";
import {makeMsgToAdjustSchedule} from "@/lib/apiUtil";
import Loading from "@/components/loading";
import PastDatePicker from "@/components/pastDatePicker";
import pastDatePicker from "@/components/pastDatePicker";
import Router from "next/router";

// 下の型を満たす値が必要
// const data = {
//         new_date: newDatesArray,
//         past_date: pastDate,
//         company_name: companyName,
//         contact_person_name: contactPersonName,
//         name: name,
//         reason: reason
//     }
//
export default function AdjustSchedulePane() {
    const [newDatesArray, setNewDatesArray] = useState([]);
    const [pastDate, setPastDate] = useState({start_date: 0, end_date: 0});
    const [companyName, setCompanyName] = useState('');
    const [contactPersonName, setContactPersonName] = useState('');
    const [name, setName] = useState('');
    const [belonging, setBelonging] = useState('');
    const [reason, setReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function submit() {
        if(companyName === "" || contactPersonName === "" || name === "" || belonging === "" || reason === "" || newDatesArray.length === 0 || pastDate.start_date === 0 || pastDate.end_date === 0){
            alert("全ての項目を入力してください");
            return;
        }

        setIsLoading(true);
        const result = await makeMsgToAdjustSchedule(
            newDatesArray,
            pastDate,
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
            <div style={{display: "flex", width: "100%", padding: "2vh 0", justifyContent: "center"}}>
                <div style={{width: "80%", paddingLeft: '1vh'}}>
                    <p style={{fontSize: 20, color: '#757575'}}>理由</p>
                    <textarea onChange={(e) => setReason(e.target.value)} placeholder="理由を入力してください"
                              style={{width: "100%", height: "10vh", border: "solid 3px #c5e998", borderRadius: "10px"}}/>
                </div>
            </div>
            <div style={{display: 'flex', marginLeft: '10%'}}>
                <div style={{display: "flex", padding: '2vh 2vh 2vh 1vh'}}>
                    <PastDatePicker setter={setPastDate}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <StartDatePicker setter={setNewDatesArray}/>
                    <StartDatePresenter newDatesArray={newDatesArray}/>
                </div>
            </div>
            <CreateBtn onClick={submit}/>
        </div>
    )
}

