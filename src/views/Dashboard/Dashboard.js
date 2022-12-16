import React from "react";
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Page from "../../components/Page";
import BombFinanceSummary from "./components/Bomb-Finance-Summary";
import InvestNow from "./components/Investnow"
import LatestNews from "./components/LatestNews";
import Discord from "./components/Discord"
import ReadDoc from "./components/ReadDoc";
import BoardroomRecom from "./components/BoardroomRecom"
import BombFarm from "./components/BombFarm";
import BondsBox from "./components/BondsBox";
import ReadIS from "./components/ReadIS";

import './Dashboard.css'

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
const Dashboard = () => {
    return (
        <Page>
            <BackgroundImage />
            <div style={{position:"relative"}} className="main">
            <BombFinanceSummary />
            <ReadIS />
            <InvestNow />
            <LatestNews />
            <Discord />
            <ReadDoc />
            <BoardroomRecom />
            <BombFarm />
            <BondsBox />
            </div>
        </Page>
    )
}

export default Dashboard;