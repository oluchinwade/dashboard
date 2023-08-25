import React from 'react'
import styled from 'styled-components'
import { BiHomeAlt } from "react-icons/bi";
import { MdPayments} from 'react-icons/md'
import { GiPayMoney } from 'react-icons/gi'
import { MdFastfood } from 'react-icons/md'
import { MdOutlineLaptop } from 'react-icons/md'

function Activity() {
  return (
    <Segment className='secolu'>
      <div className='title'>
        <h4>Recent Activities</h4>
        <h6>10 Jan 2022</h6>
      </div>
      <div className="analytic ">
      <div className="design">
      
        <div className="contentx">
        <div className="logo">
          <BiHomeAlt />
        </div>
          <h5>Rent</h5>
          <h5 className='color'>Successful</h5>
        </div>
      </div>
      <div className="amount">
        <h5>120BSV</h5>
      </div>
      </div>
      <div className="analytic ">
      <div className="design">
        <div className="logo">
          <GiPayMoney />
        </div>
        <div className="content">
          <h5>Succsses Funds</h5>
          <h5 className='color'>Received</h5>
        </div>
      </div>
      <div className="amount">
        <h5>1000BSV</h5>
      </div>
      </div>
      <div className="analytic ">
      <div className="design">
        <div className="logo">
          <MdFastfood />
        </div>
        <div className="content">
          <h5>Food Payment</h5>
          <h5 className='color'>Successful</h5>
        </div>
      </div>
      <div className="amount">
        <h5>150BSV</h5>
      </div>

      </div>
      <div className="analytic ">
      <div className="design">
        <div className="logo">
          <MdOutlineLaptop />
        </div>
        <div className="content">
          <h5>Gadget Payment</h5>
          <h5 className='color'>Successful</h5>
        </div>

      </div>
      <div className="amount">
        <h5>600BSV</h5>
      </div>

      </div>

    </Segment>
  )
}

export default Activity
const Segment = styled.section `
    display: grid;
    gap: 0.2rem;
    .title{
        margin-left: 15px;
        h4{
            font-weight:bold;
        }
        h6{
            color:  #1e388a;
        }
    }
    .analytic {
        padding: 0.3rem 0.8rem 0.3rem 1.2rem;
        
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #F5F5FD;
            color: black;
            svg {
                color: black;
            }
        }
        float: both;
        .design{
            display: flex;
            align-items: center;  
            gap:1rem;
            .logo{
                background-color: white;
                border-radius: 1rem;
                border: 1px solid white;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                svg{
                    font-size: 1.5rem;
                    color: #1e388a;
                }

            }
            .color{
                color: grey
            }
        }
        .money{
            h5{
                float: right;
                margin-top: -30px; 
                color:  #1e388a;
            }
        }
        
        
        
    }
    
`;
