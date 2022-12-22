import React from "react";
import arrowUpCircleLogo from "../../../assets/img/arrow-up-circle.svg";
import bombLogo from "../../../assets/img/bomb-200x200.png";
import bshareLogo from "../../../assets/img/bshare-200x200.png";
import RecommendedTag from "./subComponents/recommended-tag";

const BoardroomRecom = () => {
    return (
        <div className="boardroom--recom">
            <img src={bshareLogo} alt="bshare"  className="boardroom--recom--bshare--logo"/>
            <label className="boardroom--recom--label">Boardroom</label>
            <RecommendedTag top="18px" left="188.71px"/>
            <p className="boardroom--recom--heading" >Stake BSHARE and earn BOMB every epoch</p>
            <label className="boardroom--rcom--tvl">TVL: $1,008,430</label>
            <hr className="boardroom--rcom--hr--1"/>
            <div className="boardroom--rcom--tStacked--label--container" >
                <label className="boardroom--rcom--tStacked--label">Total Staked: <label style={{marginLeft:"15px"}}>7232</label></label>
                <img src={bshareLogo} alt="" className="boardroom--rcom--tStacked--bshare--logo"/>
            </div>
            <div className="boardroom--rcom--dReturns">
                <label className="boardroom--rcom--dReturns--label">Daily Returns:</label>
                <label className="boardroom--rcom--dReturns--value">2%</label>
            </div>
            <div className="boardroom--rcom--yStack" >
                <label className="boardroom--rcom--yStack--heading">Your Stake:</label>
                <img src={bshareLogo} alt="" className="boardroom--rcom--yStack--logo" />
                <label className="boardroom--rcom--yStack--value">6000</label>
                <label className="boardroom--rcom--yStack--Dvalue">≈ $1171.62</label>
            </div>
            <div className="boardroom--rcom--yStack boardroom--rcom--earned">
                <label className="boardroom--rcom--yStack--heading">Your Earned:</label>
                <img src={bombLogo} alt="" className="boardroom--rcom--earned--logo" />
                <label className="boardroom--rcom--yStack--value">1660.4413</label>
                <label className="boardroom--rcom--yStack--Dvalue">≈ $298.88</label>
            </div>
            <div className="boardroom--rcom--deposit--btn">
                <label className="boardroom--rcom--deposit--btn--label" >Deposit</label>
                <img src={arrowUpCircleLogo} alt=""  />
            </div>
            <div className="boardroom--rcom--withdrawl--btn">
                <label className="boardroom--rcom--deposit--btn--label" >Withdraw</label>
                <img src={arrowUpCircleLogo} alt="" style={{transform: 'rotate(-180deg)'}}/>
            </div>
            <div className="boardroom--rcom--claimRewards--btn">
                <label className="boardroom--rcom--claimRewards--btn--label" >Claim Rewards</label>
                <div className="boardroom--rcom--claimRewards--btn--logo--container">
                    <img src={bshareLogo} alt="" className="boardroom--rcom--claimRewards--btn--logo" />
                </div>
            </div>
        </div>
    )
}
export default BoardroomRecom