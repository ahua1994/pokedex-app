import React from "react";

const Banner = () => {
    const style = { display: "flex", justifyContent: "center", marginTop: "3rem" };
    return (
        <div style={style} className="Banner">
            <img
                style={{ width: "25rem" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
                alt="Pokemon Logo"
            />
        </div>
    );
};

export default Banner;
