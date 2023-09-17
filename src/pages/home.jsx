import Header from "@/components/header"
import Frame from "@/components/frame"
import Create from "@/components/create"
import YourNameInput from "../components/yourNameInput"
import Square from "../components/square"
import Date from "../components/date"
import Apology from "../components/apology"
import Refusal from "../components/refusal"

import SideBarDesign from "../components/side"

export default function Home() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'stretch' }}>
            {/* <SideBar /> */}
            <SideBarDesign></SideBarDesign>

            <div style={{ width: '85%' }}>

                <Header />
                {/* <div>
                    <Frame />
                    <YourNameInput />
                    <Date />
                </div> */}
{/* 
                <div>
                    <Frame />
                    <YourNameInput />
                    <Apology />
                </div> */}
                
                <div>
                    <Frame />
                    <YourNameInput />
                    <Refusal />
                </div>

                <Create />
            </div>
            <Square />
        </div>
    )
}