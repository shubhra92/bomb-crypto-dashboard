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
            <p className="summryText">Bomb Finance Summary</p>
            <hr className="line--1"/>
            <div className="current--epoch--box">
                <div className="current--epoch">
                    <p style={{margin:0}}> current epoch 285</p>
                </div>

            </div>
        </div>
    )
}

export default BombFinanceSummary