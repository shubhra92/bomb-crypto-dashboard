import React from "react";

const LogoBtn = ({ LogoImg, Label, width, top, left, gap, right }) => {
    const position = left?{left}:{right}
    return (
        <div className="common--logoBtn" style={{width, top, gap, ...position}}>
            <label className="common--logoBtn--label">{Label}</label>
            <div className="boardroom--rcom--claimRewards--btn--logo--container">
                <img src={LogoImg} alt="" className="boardroom--rcom--claimRewards--btn--logo" />
            </div>
        </div>
    )
}

export default LogoBtn