import React, { useState } from "react";

const caseDesign1 = {
  display: "block",
  margin: "5px",
  padding: "5px",
  textAlign: "left",
};

const caseDesign2 = {
  display: "block",
  margin: "5px",
  padding: "10px 5px 0px 5px",
  color: "black",
  textAlign: "center",
  borderBottom: "1.5px solid #757575",
};

export default function SideBar3() {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedWork(value);
  };

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "15%", height: "100%", display: "flex", alignItems: "flex-end" }}>
        <div style={{ width: "100%", height: "90%", backgroundColor: "#D9D9D9" }}>
          
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index}>
              <input
                type="radio"
                name="work"
                id={`button-${index}`}
                value={index}
                style={{ display: "none" }}
                onChange={() => handleRadioChange(index)}
              />
              <label
                htmlFor={`button-${index}`}
                style={{
                  ...caseDesign2,
                  backgroundColor: selectedWork === index ? "#d9d9d9" : caseDesign2.backgroundColor,
                }}
              >
                {selectedWork === index ? "選択中" : `ボタン-${index}`}
              </label>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
