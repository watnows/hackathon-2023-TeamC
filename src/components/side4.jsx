import React, { useEffect, useState } from "react";

const ListTitleDesign = {
    margin: "5px 5px 0px 5px",
    padding: "5px 5px 0px 10px",
    textAlign: "left",
    fontSize: "20px",
    color: "#757575",
};

const ListContentDesign = {
    textAlign: "left",
    fontSize: "20px",
    displayStyle: "block",
    width: "100%",
};

const buttonStyle = {
    border: "none",
};

const ButtonTitle = [
    {
        button: "button-1",
        title: "日程変更",
    },
    {
        button: "button-2",
        title: "お礼",
    },
    {
        button: "button-4",
        title: "辞退",
    },
    {
        button: "button-5",
        title: "承諾",
    },
    {
        button: "button-6",
        title: "謝罪",
    },
];

function RadioElement(props) {
    const [isEnter, setIsEnter] = useState(false);

    function handleOnEnter() {
        setIsEnter(true);
    }

    function handleOnLeave() {
        setIsEnter(false);
    }

    function handleClick() {
        props.setter(props.title);
    }

    function handleChange(e) {
        console.log(e.target.id);
        props.setSelectedIndex(props.button);
    }

    return (
        <div
            style={{
                backgroundColor: isEnter ? "#77AF9C" : "#8CD790",
                color: props.selectedIndex === props.button ? "#ffffff" : "#757575",
                display: "flex",
                padding: "10px 5px 0px 20px",
                width: "100%",
            }}
            onMouseEnter={handleOnEnter}
            onMouseLeave={handleOnLeave}
            onClick={handleClick}
        >
            <input
                type="radio"
                id={props.button}
                value={props.title}
                style={{ display: "none" }}
                name="work"
                onChange={handleChange}
            />
            <label htmlFor={props.button} style={ListContentDesign}>
                {props.title}
            </label>
        </div>
    );
}

function SideBarDesign({ menuStatusSetter }) {
    const [selectedIndex, setSelectedIndex] = useState("button-1");

    useEffect(() => {
        console.log(selectedIndex);
    }, [selectedIndex]);

    return (
        <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", height: "87%", backgroundColor: "#8CD790", border: "dashed 5px #696969" }}>
                <div style={ListTitleDesign}>
                    就活
                </div>
                <fieldset style={buttonStyle}>
                    {ButtonTitle.map((value, index) => (
                        <RadioElement
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            title={value.title}
                            button={value.button}
                            setter={menuStatusSetter}
                            key={index}
                        />
                    ))}
                </fieldset>
            </div>
        </div>
    );
}

export default SideBarDesign;
