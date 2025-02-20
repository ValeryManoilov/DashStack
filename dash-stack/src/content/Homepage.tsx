import styled from "styled-components";
import Orders from "../assets/HomepageImages/Order.svg";
import Users from "../assets/HomepageImages/User.svg";
import Sales from "../assets/HomepageImages/Sales.svg";
import Pending from "../assets/HomepageImages/Pending.svg";
import Down from "../assets/HomepageImages/Down.svg";
import Up from "../assets/HomepageImages/Up.svg";
import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import style from "./Homepage.module.css";

import Select from "react-select";

interface Card{
    title: string,
    value: string,
    avatar: string,
    growth: number
}

const ArrayCards: Card[] = [
    {
        title: "Total User",
        value: "40,689",
        avatar: Users,
        growth: 1.085
    },
    {
        title: "Total Order",
        value: "10293",
        avatar: Orders,
        growth: 1.013
    },
    {
        title: "Total Sales",
        value: "$89,000",
        avatar: Sales,
        growth: 0.957
    },
    {
        title: "Total Pending",
        value: "2040",
        avatar: Pending,
        growth: 1.013
    },
]

const ChartData = [
    { count: 5, percent: 10 },
    { count: 10, percent: 20 },
    { count: 15, percent: 60 },
    { count: 20, percent: 40 },
    { count: 25, percent: 30 },
    { count: 30, percent: 80 },
    { count: 35, percent: 90 },
    { count: 40, percent: 10 },
    { count: 45, percent: 20 },
    { count: 50, percent: 30 },
    { count: 55, percent: 10 },
    { count: 60, percent: 40 },
]

const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

let MonthsOptions = []

for (var month of Months)
{
    MonthsOptions.push(
        {
            value: month,
            label: month
        }
    )
}

export const HomepageContainer  = styled.div`
    background-color: #F5F6FA;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    gap: 30px;
`

export const HomepageTitle  = styled.h2`
`

export const DataCardsContainer  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const Card  = styled.div`
    background-color: #FFFFFF;
    padding: 1.3%;
    border-radius: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 29px;
    width: 23%;
    transition: all 0.2s;
    cursor: pointer;

    &:hover
    {
        transform: scale(1.1);
    }
`


export const Info  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`


export const InfoContainer  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
`

export const InfoTitle  = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1em;
    color: #202224;
    opacity: 0.7;
`


export const InfoValue  = styled.p`
    font-size: 1.75em;
    font-weight: 700;
    color: #202224;
`


export const InfoAvatar  = styled.img`
`

export const Growth  = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`

export const GrowthImg  = styled.img`
`

export const GrowthValue  = styled.div`
    color: ${(props) => (props.growth ? "#00B69B" : "#F93C65")};    
`

export const GrowthText  = styled.p`
    font-size: 1em;
    opacity: 0.7;
`

export const Graph = styled.div`
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

const Homepage = () => {
    return(
        <HomepageContainer>
            <HomepageTitle>DashBoard</HomepageTitle>
            <DataCardsContainer>
                {
                    ArrayCards.map((el) => (
                        <Card>
                            <Info>
                                <InfoContainer>
                                    <InfoTitle>{el.title}</InfoTitle>
                                    <InfoValue>{el.value}</InfoValue>
                                </InfoContainer>
                                <InfoAvatar src={el.avatar}/>
                            </Info>
                            <Growth>
                                { el.growth > 1 ? 
                                <>
                                    <GrowthImg src={Up}/>
                                    <GrowthValue growth={true}>{Math.floor((el.growth-1)*100).toFixed(1)}%</GrowthValue>
                                    <GrowthText>Up from yesterday</GrowthText>
                                </>: 
                                <>
                                    <GrowthImg src={Down}/>
                                    <GrowthValue growth={false}>{((1-el.growth)*100).toFixed(1)}%</GrowthValue>
                                    <GrowthText>Down from yesterday</GrowthText>
                                </>}
                            </Growth>
                        </Card>
                    ))
                }
            </DataCardsContainer>
            <Graph>
                <GraphHeader>
                    <GraphTitle>Sales Details</GraphTitle>
                    <Select options={MonthsOptions}/>
                </GraphHeader>
                <GraphContainer>
                    <AreaChart data={ChartData}>
                        <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4369EF" opacity={1}/>
                                <stop offset="100%" stopColor="#FFFFFF" opacity={1}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={"count"} stroke="#FFFFFF" tickFormatter={(value) => value + "K"} tick={{fontSize: "0.75em", fill: "#2B3034"}} opacity={0.7}/>
                        <YAxis tickFormatter={(value) => value + "%"} stroke="#FFFFFF" tick={{fontSize: "0.75em", fill: "#2B3034"}} opacity={0.7}/>
                        <Area type="linear" dataKey={"percent"} stroke="#4379EE" fill="url(#areaGradient)"/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                    </AreaChart>
                </GraphContainer>
            </Graph>
        </HomepageContainer>
    )
}

export default Homepage;