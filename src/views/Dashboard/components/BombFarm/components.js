import React from "react";
import ArrowBtn from "../subComponents/arrow-btn.js";
import LogoBtn from "../subComponents/logo-btn.js";
import RecommendedTag from "../subComponents/recommended-tag.js";


const StackEarnC =({Logo, Label, cValue, dValue, left, top}) => {
    return (
        <div className="B-B--container--yStack" style={{left, top}}>
            <label>{Label} <br/>
                <img src={Logo} alt="" />
                <span className="value">{cValue}</span><br/> 
                <span className="aValue">≈ ${dValue}</span>
            </label>
        </div>
    )
}

const BBContainer = ({mLogo, Label, sLogo, eLogo, top, reLeft}) =>{
    return (
         <div className="B-B--container" style={{top}}>
                <img src={mLogo} alt="" className="B-B--container--logo"/>
                <label className="B-B--container--label">{Label}</label>
                <RecommendedTag left={reLeft} top="6px"/>
                <label className="B-B--container--tvl">TVL: $1,008,430</label>
                <hr className="B-B--container--hr" />
                <div className="B-B--container--dReturn">
                    <label>Daily Returns: <b style={{fontWeight:'400', fontSize:'22px' ,lineHeight:'30px' }}>2%</b> </label>
                </div>
                <StackEarnC Logo={sLogo} Label="Your Stake:" cValue="124.21" dValue="1171.62" left="170px" top="48.89px"/>
                <StackEarnC Logo={eLogo} Label="Earned:" cValue="6.4413" dValue="298.88" left="305px" top="48.89px"/>
                <ArrowBtn right="312px" top="86px" Label="Dposit" />
                <ArrowBtn right="190px" top="86px" Label="Withdraw" down={true} />
                <LogoBtn LogoImg={eLogo} Label="Claim Rewards" width="150px" right="26px" top="86px" gap="6px"/>

            </div>)
}

export { BBContainer };

