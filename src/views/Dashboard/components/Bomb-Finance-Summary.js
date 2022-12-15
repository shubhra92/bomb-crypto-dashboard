import React, { useMemo } from "react";
import {roundAndFormatNumber} from "../../../0x"
import useBombStats from '../../../hooks/useBombStats';
import TokenSymbol from "../../../components/TokenSymbol"
import { Typography } from "@material-ui/core";



const BombFinanceSummary = () => {
    const tokens = ["Bomb"]
    const bombStats = useBombStats();
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
    return (
        <div className="summry--container">
            <Typography className="summryText">Bomb Finance Summary</Typography>
            <div className="Line--1st"></div>
            <bold className="current-supply-keyword">Current Supply</bold>
            <bold className="total-supply-keyword">Total Supply</bold>
            <bold className="Price-keyword">Price</bold>
            <div className="Line--2nd"></div>
            <span className="BOMB--symbol">
            <TokenSymbol symbol="BOMB"/>
            </span>

            
        </div>
    )
}

export default BombFinanceSummary