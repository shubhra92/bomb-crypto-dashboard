import React, { useMemo } from "react";
import {roundAndFormatNumber} from "../../../0x"
import useBombStats from '../../../hooks/useBombStats';
import TokenSymbol from "../../../components/TokenSymbol"
import { Typography } from "@material-ui/core";
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';



const BombFinanceSummary = () => {
    const TVL = useTotalValueLocked();
    const currentEpoch = useCurrentEpoch()
    const tokens = ["Bomb"]
    const bombStats = useBombStats();
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
    const { to } = useTreasuryAllocationTimes();

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
            <div className="cs--ts--p--table" style={{border:"2px solid red"}}>
                <div className="cs--ts--p--table--box--3">
                    
                </div>
            </div>
        </div>
    )
}

export default BombFinanceSummary