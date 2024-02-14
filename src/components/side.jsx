import {useEffect, useState} from "react"

const CaseDesign = {
    fontSize: "140%",
    margin: "10px",
}

const RadioDesign = {
    display: "block",
    fontSize: "130%",
    margin: "0px 0px 15px 30px",
    //border: "1px solid"
}

export default function SideBarDesign({menuStatusSetter}) {
    function handleRadioChange(str) {
        menuStatusSetter(str);
    }

    return (
        <div style={{width: '15%', height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <div style={{width: '100%', height: '90%', backgroundColor: '#D9D9D9', border: 'dashed 5px #696969'}}>
                <details>

                    <div style={RadioDesign} onClick={() => {
                        handleRadioChange("日程調節")
                    }}>
                        <input type="radio" name="work" id="bottun-1" value="日時調節"/>
                        <label htmlFor="bottun-1">日時調節</label>
                    </div>
                    <div style={RadioDesign} onClick={() => {
                        handleRadioChange("お礼")
                    }}>
                        <input type="radio" name="work" id="bottun-2" value="お礼"/>
                        <label htmlFor="bottun-2">お礼</label>
                    </div>
                    <div style={RadioDesign} onClick={() => {
                        handleRadioChange("応募")
                    }}>
                        <input type="radio" name="work" id="bottun-3" value="応募"/>
                        <label htmlFor="bottun-3">応募</label>
                    </div>
                    <div style={RadioDesign}>
                        <input type="radio" name="work" id="bottun-4" value="辞退" onClick={() => {
                            handleRadioChange("辞退")
                        }}/>
                        <label htmlFor="bottun-4">辞退</label>
                    </div>
                    <div style={RadioDesign}>
                        <input type="radio" name="work" id="bottun-5" value="承諾" onClick={() => {
                            handleRadioChange("承諾")
                        }}/>
                        <label htmlFor="bottun-5">承諾</label>
                    </div>
                    <div style={RadioDesign}>
                        <input type="radio" name="work" id="bottun-6" value="謝罪" onClick={() => {
                            handleRadioChange("謝罪")
                        }}/>
                        <label htmlFor="bottun-6">謝罪</label>
                    </div>
                </details>
            </div>
        </div>

    )
}