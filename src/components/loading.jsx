const Loading = () => {
    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", position: "fixed", top: 0, left:0, zIndex: 1000}}>
            <div className={"circle-motion"} style={{width: "100%",height: "100%",display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="illu">
                    <div className="bug"></div>
                    <div className="wing wing--1">
                        <div className="point point--1"></div>
                        <div className="point point--2"></div>
                        <div className="point point--3"></div>
                    </div>
                    <div className="wing wing--2">
                        <div className="point point--4"></div>
                        <div className="point point--5"></div>
                        <div className="point point--6"></div>
                        <div className="point point--7"></div>
                    </div>
                </div>
            </div>
            <div style={{color: "white", position: "fixed", top: "70%", left:"45%", fontSize: "1.5rem"}}>Loading...</div>
        </div>
    )
}

export default Loading;