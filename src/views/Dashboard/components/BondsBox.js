import React from "react";
import bbondLogo from "../../../assets/img/bbond-256.png";
import ArrowBtn, { CartBtn } from "./subComponents/arrow-btn.js";

const BondsBox = () => {
    return (
        <div className="bonds--box">
            <img src={bbondLogo} alt="" className="bonds--box--logo"/>
            <label className="bonds--box--label">Bonds</label>
            <p className="bonds--box--heading">BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
            <label className="bonds--box--currPLebel">Current Price: &#40;Bomb&#41;^2</label>
            <label className="bonds--box--currP--BTCB--label">BBond = 6.2872 BTCB</label>
            <div className="bonds--box--aRedeem">
                <label className="bonds--box--aRedeem--label">Available to redeem: </label>
                <div>
                    <img src={bbondLogo} alt="" className="bonds--box--aRedeem--logo"/>
                    <span className="bonds--box--aRedeem--value">456</span>
                </div>
            </div>
            <div className="bonds--box--purchase">
                <label>Purchase BBond</label>
                <span>Bomb is over peg</span>
                <CartBtn Label="Purchase" top="14px" right="0px" color="rgba(255, 255, 255, 0.5)"/>
            </div>
            <hr className="bonds--box--hr"/>
            <div className="bonds--box--redeem">
                <label>Redeem Bomb</label>
                <ArrowBtn Label="Redeem" top="0px" right="0px" down={true}/>
            </div>
        </div>
    )
}

export default BondsBox