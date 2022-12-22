import React from "react";
import bonmBitcoinLogo from "../../../../assets/img/bomb-bitcoin-LP.png";
import bshareLogo from "../../../../assets/img/bshare-200x200.png";
import bshareBnbLogo from "../../../../assets/img/bshare-bnb-LP.png";
import LogoBtn from "../subComponents/logo-btn";
import { BBContainer } from "./components";

const BombFarm = () => {

    return (
        <div className="bomb--farm">
            <label className="bomb--farm--label" >Bomb Farms</label>
            <label className="bomb--farm--heading" >Stake your LP tokens in our farms to start earning $BSHARE</label>
            <LogoBtn LogoImg={bshareLogo} Label="Claim All" width="148px" left="871px" top="28.43px" gap="13px" />
            <BBContainer mLogo={bonmBitcoinLogo} Label="BOMB-BTCB" sLogo={bonmBitcoinLogo} eLogo={bshareLogo}  top='91px' reLeft="206.46px"/>
            <hr className="bomb--farm--hr"/>
            <BBContainer mLogo={bshareBnbLogo} Label="BSHARE-BNB" sLogo={bonmBitcoinLogo} eLogo={bshareLogo} top='235px' reLeft="215.46px"/>
        </div>
    )
}
export default BombFarm