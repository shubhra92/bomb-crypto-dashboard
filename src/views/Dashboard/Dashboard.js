import React from "react";
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import Page from "../../components/Page";
import BombFinanceSummary from "./components/Bomb-Finance-Summary";
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
            <div style={{position:"relative"}}>
            <BombFinanceSummary />
            </div>
        </Page>
    )
}

export default Dashboard;