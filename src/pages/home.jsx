import Header from "@/components/header"
import SideBar from "@/components/sideBar"
import Frame from "@/components/frame"
import Create from "@/components/create"
import YourNameInput from "../components/yourNameInput"
import Square from "../components/square"
import Date from "../components/date"

export default function Home() {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'stretch'}}>
            <SideBar />

            <div style={{width: '85%'}}>
            <Header  />
            <Frame />
            <YourNameInput />
            <Date />

            <Create />

            </div>

            <Square />
        </div>
    )
}