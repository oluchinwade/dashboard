import React from 'react'
import styled from "styled-components";
import avatarImage from "../assets/profile.jpg";

function History() {
  return (
    <Segment>
      <div className="orders">
      <div className="orders__details">
          <div>
                <h4>History</h4> 
              
          </div>
          <div> 
          <h6>All Transactions</h6> 
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
              <td><img src={avatarImage} alt="" /></td>
              <td >Rent Payment</td>
              <td>14:10:32 AM</td>
              <td>350.00BSV</td>
              <td >Complete</td>
            </tr>
            
            </table>
        </div>
        </div>
    </Segment>
  )
}

export default History
const Segment = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;