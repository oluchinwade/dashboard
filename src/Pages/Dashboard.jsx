import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytics from './Analytics'
import Balance from './Balance'
import History from './History'

function Dashboard() {
  return (
    <Segment>
           
            <div className="grid">        
                    <Navbar />
                    <Analytics />
                    <Balance />
                    <History />    
            </div>
    </Segment>
  )
}

export default Dashboard
const Segment = styled.section `
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 60rem;
background-color: #F5F5FD;
.grid{ 
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}

`;