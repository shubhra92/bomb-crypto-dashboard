import React from "react";
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/backgroundDashboard.png';
import Page from "../../components/Page";
import BoardroomRecom from "./components/BoardroomRecom";
import BombFinanceSummary from "./components/Bomb-Finance-Summary";
import BombFarm from "./components/BombFarm/BombFarm";
import BondsBox from "./components/BondsBox";
import Discord from "./components/Discord";
import InvestNow from "./components/Investnow";
import LatestNews from "./components/LatestNews";
import ReadDoc from "./components/ReadDoc";
import ReadIS from "./components/ReadIS";

import './Dashboard.css';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat;
    background-size: cover !important;
    background-color: red;
  }
`;
const Dashboard = () => {
    return (
        <Page>
            <BackgroundImage />
            <div style={{boxSizeing:'border-box', width:"100%", display:"flex", justifyContent:"center"}}>
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
            </div>
        </Page>
    )
}

export default Dashboard;