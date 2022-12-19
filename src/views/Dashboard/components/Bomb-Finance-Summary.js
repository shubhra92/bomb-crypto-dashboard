import React, { useMemo } from "react";
import {roundAndFormatNumber} from "../../../0x"
import useBombStats from '../../../hooks/useBombStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useBondStats from '../../../hooks/useBondStats';
import TokenSymbol from "../../../components/TokenSymbol"
import { Typography } from "@material-ui/core";
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import bombImg from "../../../assets/img/bomb-256.png";
import bshareImg from "../../../assets/img/bshare-256.png";
import bbondImg from "../../../assets/img/bbond-256.png";
import MetamaskFox from '../../../assets/img/metamask-fox.svg';




const BombFinanceSummary = () => {
    const totalSupplyFunc = (value) =>{
        if( !Number(value) ) return value;
        if( value > (1000*1000)) value = [String(value/(1000*1000)) , "m"]
        else if( value > 1000 ) value = [String(value/1000) ,'k'];
        // return value
        if( value[1]!==undefined ) {
            if( /^(?=.*[.]).*$/.test(value) ) value[0]=value[0].split(".")
            return (Array.isArray(value[0])?value[0][0]+"."+value[0][1][0]:value[0]) + value[1]
        }else return value
    }
    const TVL = useTotalValueLocked();
    const currentEpoch = useCurrentEpoch()
    const tokens = ["Bomb"]
    
    const bombStats = useBombStats();
    const bombTotalSupply = useMemo(() => (bombStats ? totalSupplyFunc(bombStats.totalSupply) : '--.--'), [bombStats]);
    const bShareStats = usebShareStats();
    const bShareTotalSupply = useMemo(() => (bShareStats ? totalSupplyFunc(bShareStats.totalSupply) : '--.--'), [bShareStats]);
    const tBondStats = useBondStats();
    const tBondTotalSupply = useMemo(() => (tBondStats ? totalSupplyFunc(tBondStats.totalSupply) : '--.--'), [tBondStats]);

    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
      );
    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
      );
    const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
      );


    const { to } = useTreasuryAllocationTimes();

    const Cs_Ts_P_Table_Box = ({Top, LogoLabel, Logo, TotalSupply, DollarPrice}) => {
        return (
            <div className="cs--ts--p--table--box--3" style={{top: Top}} >
                    <div style={{position:"relative"}}>
                        <img className="logo--bbond--logo"  src={Logo} alt="" / >
                        <label className="logo--bbond--label">${LogoLabel}</label>
                    </div>
                    <div className="cs--ts--p--value" >
                        <label className="cs--value" >20.00K</label>
                        <label className="ts--value">{TotalSupply}</label>
                        <span className="p--value" >
                            <label >${DollarPrice}</label>
                            <label>1.15 BTCB</label>
                        </span>
                        <img className="metamaskfox--logo" src={MetamaskFox} alt="" />
                    </div>
                    <hr className="cs--ts--p--table--hr--2"/>
            </div>
        )
    }

    return (
        <div className="summry--container">
            <p className="summryText">Bomb Finance Summary</p>
            <hr className="line--1"/>
            <div className="current--epoch--box">
                <div className="current--epoch">
                    <p style={{margin:0}}> Current Epoch</p>
                     <h1 style={{color:'white',fontWeight:500}}>{Number(currentEpoch)}</h1>
                </div>
                <hr className="current--epoch--box--hr--1"/>
                <div className="next--epoch">
                <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch"/>
                    <p style={{margin:0,lineHeight:0, fontSize:'22px',fontWeight:300}}> Next Epoch in </p>
                </div>
                <hr className="current--epoch--box--hr--2"/>
                <p className="live--twap">Live TWAP: <span style={{color:"rgba(0, 232, 162, 1)"}}>1.17</span></p>
                <p className="tvl">TVL: <CountUp style={{color:"rgba(0, 232, 162, 1)"}} end={TVL} separator="," prefix="$" /></p>
                <p className="last--epoch--twap">Last Epoch TWAP: <span style={{color:"rgba(0, 232, 162, 1)"}}>1.22</span></p>
            </div>
            <div className="cs--ts--p--table" >
                <label className="cs--label">Current Supply</label>
                <label className="ts--label">Total Supply</label>
                <label className="p--label">Price</label>
                <hr className="cs--ts--p--table--hr--1"/>
                <Cs_Ts_P_Table_Box Top={'30px'} LogoLabel={'BOMB'} Logo={bombImg} TotalSupply={bombTotalSupply} DollarPrice={bombPriceInDollars}/>
                <Cs_Ts_P_Table_Box Top={'90px'} LogoLabel={'BSHARE'} Logo={bshareImg} TotalSupply={bShareTotalSupply} DollarPrice={bSharePriceInDollars}/>
                <Cs_Ts_P_Table_Box Top={'150px'} LogoLabel={'BBOND'} Logo={bbondImg} TotalSupply={tBondTotalSupply} DollarPrice={tBondPriceInDollars}/>
            </div>
        </div>
    )
}

export default BombFinanceSummary