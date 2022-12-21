import React from "react";
import readDocLogo from "../../../assets/img/readDocLogo.svg";

const ReadDoc = () => {
    return (
        <div className="read--doc">
            <div className="read--doc--logo--container">
                <img src={readDocLogo} alt="" className="read--doc--logo"/>
            </div>
            <label className="read--doc--label">Read Docs</label>
        </div>
    )
}
export default ReadDoc