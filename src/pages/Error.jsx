import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
                style={{ marginTop: "2rem", width: "100%", maxWidth: "680px" }}
                src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
                alt="surprised pikachu"
            />
            <h1>Database Does Not Contain This Pokemon</h1>
            <button className="back-btn" onClick={() => navigate("/")}>
                Home
            </button>
        </div>
    );
};

export default Error;
