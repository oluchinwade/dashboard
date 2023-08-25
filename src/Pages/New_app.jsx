import React from 'react'
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Rightsidebar from "./Rightsidebar";
import Dashboard from "./Dashboard";



function New_app() {
  return (
    <Block>
      <Sidebar />
      <Dashboard />
      <Rightsidebar />    
    </Block>
  )
}

export default New_app
const Block = styled.div`
position: relative;
`;