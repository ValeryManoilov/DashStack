import styled from "styled-components";
import Graph from "./Graph.js";
import Card from "./Card.js";
import Deals from "./Deals.js";
import cardStore from "../stores/CardStore.js"

interface Card{
    title: string,
    value: string,
    avatar: string,
    growth: number
}

export const HomepageContainer  = styled.div`
    background-color: #F5F6FA;
    width: 100%;
    min-height: 100vh;
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

const Homepage = () => {
    return(
        <HomepageContainer>
            <HomepageTitle>DashBoard</HomepageTitle>
            <DataCardsContainer>
                {
                    cardStore.data.map((el: any, index: any) => (
                        <Card el={el} key={index}/>
                    ))
                }
            </DataCardsContainer>
            <Graph/>
            <Deals/>
        </HomepageContainer>
    )
}

export default Homepage;