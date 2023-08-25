import React from "react";
import styled from 'styled-components'
import Notification from './Notification'
import Wallet from './Wallet'
import Activity from './Activity'
import Payment from './Payment'

function Rightsidebar() {
    return (
        <Segment>
            <div className="grid">
            <Notification />
            <Wallet />
            <Activity />
            <Payment />

            </div>
        </Segment>
    )
}

export default Rightsidebar
const Segment = styled.section`
    position: fixed;
    right: 0;
    top: 0;
    background-color: #ECECF6;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    gap: 2rem;
    .grid{
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;