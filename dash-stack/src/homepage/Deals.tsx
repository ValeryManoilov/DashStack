import styled from "styled-components"
import dealsStore from "../stores/DealsStore.js"
import Deal from "./Deal.js"

export const DealsContainer = styled.div`
    width: 100%;
    display: grid;
    box-sizing: border-box;
    padding: 2em;
    background-color: #FFFFFF;
    gap: 2em;
`

export const ColumnNames = styled.tr`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 2fr;
    width: 100%;
    background-color: #F1F4F9;
    padding: 1em 2em 1em 2em;
    box-sizing: border-box;
    border-radius: 12px;
`

export const Name = styled.th`
    display: flex;
    flex-direction: row;
    justify-content: start;
    color: #202224;
    font-size: 0.875em;
    font-weight: 700;
    &:last-child
    {
        justify-content: center;
    }
`

export const Title = styled.h2`
    margin: 0;
    padding: 0;
`


function Deals()
{
    return(
        <DealsContainer>
            <Title>
                Deals Details
            </Title>
            <ColumnNames>
            {
                dealsStore.names.map((el: any, index: any) => (
                    <Name id={index}>{el.name}</Name>
                ))
            }
            </ColumnNames>
            {
                dealsStore.data.map((el: any, index: any) => (
                    <Deal el={el} key={index}/>
                ))
            }
        </DealsContainer>
    )
}

export default Deals