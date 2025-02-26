import styled from "styled-components"

export const DealContent = styled.tr`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 2fr;
    padding: 1em 2em;
    box-sizing: border-box;
`

export const Text = styled.th`
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-size: 0.875em;
    font-weight: 400;
    color: #202224;
    opacity: 0.8;
    &:last-child
    {
        justify-content: center;
        margin: auto;
        padding: 0.25em 1em;
        border-radius: 1em;
        color: #FFFFFF;
        background-color: ${(props) => (props.status == "Delivered" ? "#00B69B" : "red")};
    }

`


function Deal(props: any)
{
    return(
        <DealContent>
            <Text>{props.el.productName}</Text>
            <Text>{props.el.location}</Text>
            <Text>{props.el.dateTime}</Text>
            <Text>{props.el.piece}</Text>
            <Text>{props.el.amount}</Text>
            <Text status={props.el.status}>{props.el.status}</Text>
        </DealContent>
    )
}

export default Deal