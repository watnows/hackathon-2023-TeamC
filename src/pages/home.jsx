import Header from "@/components/header"
import SideBar from "@/components/sideBar"
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


export default function Home() {

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'stretch' }}>
            <SideBar />

            <div style={{ width: '85%' }}>

                <Header />
                <Frame />
                <YourNameInput />
                {/* <div className="日程調整">

                    <Date />
                </div> */}

                {/* <div className="謝罪">
                    <Apology />
                </div>

                <div className="辞退">
                    <Refusal />
                </div> */}
                {/* <div className="承諾">
                    <Accept />
                </div> */}

                {/* <div className="お礼">
                    <Thanks />
                </div> */}
                <div className="応募">
                    <Application />
                </div>

                <Create />
            </div>
            <Square />
        </div>
    )
}