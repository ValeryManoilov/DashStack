import styled from "styled-components";
import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState, useEffect } from "react";
import chartStore from "../stores/ChartStore.js"


export const GraphContent = styled.div`
    background-color: #FFFFFF;
    padding: 2.7%;
    box-sizing: border-box;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10%;
    border-radius: 14px;
`

export const GraphTitle  = styled.h3`
    font-size: 1.5em;
    color: #000000;
`

export const GraphContainer = styled(ResponsiveContainer)`
    width: 100%;
`
export const GraphHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

function Graph()
{
    const [checkedMonth, setCheckedMonth] = useState(11)
    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(chartStore.data[checkedMonth].weeks);
    }, [checkedMonth]); 
    
    useEffect(() => {
        setData(chartStore.data[checkedMonth].weeks);
    }, []);

    return(
        <GraphContent>
            <GraphHeader>
                <GraphTitle>Sales Details</GraphTitle>
                <select onChange={(e: any) => setCheckedMonth(e.target.value)} name="" id="">
                    {
                        chartStore.data.map((el: any, id: any) => (
                            <option value={id}>{el.month}</option>
                        ))
                    }
                </select>
            </GraphHeader>
            <GraphContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4369EF" opacity={1}/>
                            <stop offset="100%" stopColor="#FFFFFF" opacity={1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={"dates"} stroke="#FFFFFF" tickFormatter={(value) => value } tick={{fontSize: "0.75em", fill: "#2B3034"}} opacity={0.7}/>
                    <YAxis tickFormatter={(value) => value} stroke="#FFFFFF" tick={{fontSize: "0.75em", fill: "#2B3034"}} opacity={0.7}/>
                    <Area type="linear" dataKey={"sales"} stroke="#4379EE" fill="url(#areaGradient)"/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                </AreaChart>
            </GraphContainer>
        </GraphContent>
    )
}

export default Graph;