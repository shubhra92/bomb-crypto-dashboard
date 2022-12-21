import React from "react";
import discordLogo from "../../../assets/img/discordLogo.svg";

const Discord = () => {
    return (
        <div className="discord">
            <div className="discord--logo--container">
                <img  src={discordLogo} alt="" className="discord--logo"/>
            </div>
            <label className="discord--label">Chat on Discord</label>
        </div>
    )
}
export default Discord