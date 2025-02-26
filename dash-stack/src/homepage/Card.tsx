import styled from "styled-components"
import Down from "../assets/HomepageImages/Down.svg";
import Up from "../assets/HomepageImages/Up.svg";


export const CardContent  = styled.div`
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

function Card(props: any)
{
    return(
        <CardContent>
            <Info>
                <InfoContainer>
                    <InfoTitle>{props.el.title}</InfoTitle>
                    <InfoValue>{props.el.value}</InfoValue>
                </InfoContainer>
                <InfoAvatar src={props.el.avatar}/>
            </Info>
            <Growth>
                { props.el.growth > 1 ? 
                <>
                    <GrowthImg src={Up}/>
                    <GrowthValue growth={true}>{Math.floor((props.el.growth-1)*100).toFixed(1)}%</GrowthValue>
                    <GrowthText>Up from yesterday</GrowthText>
                </>: 
                <>
                    <GrowthImg src={Down}/>
                    <GrowthValue growth={false}>{((1-props.el.growth)*100).toFixed(1)}%</GrowthValue>
                    <GrowthText>Down from yesterday</GrowthText>
                </>}
            </Growth>
        </CardContent>
    )
}

export default Card