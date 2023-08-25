import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";

function Balance() {
    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Balance</h4>
                    </div>
                    <div>
                        <h5>PAST 30 DAY</h5>
                    </div>
                </div>
                <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="150%">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#14121F" />
                        <Bar dataKey="uv" stackId="a" fill="#E5E5F1" />
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default Balance
const data = [
    {
      name: 'Rent',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Food',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Fashion',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Gadget',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
        name: 'Savings',
        uv: 2000,
        pv: 1200,
        amt: 4000,
      },


  ];
const Section = styled.section`
.sales{
    color: black;
    width: 100%;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
        }
    }
}

`;
