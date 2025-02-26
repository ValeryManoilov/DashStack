import { Link } from "react-router";
import styled, { keyframes } from "styled-components";
import style from "./index.module.css";

import aside1 from "../assets/AsideImages/FirstArray/aside1.svg";
import aside2 from "../assets/AsideImages/FirstArray/aside2.svg";
import aside3 from "../assets/AsideImages/FirstArray/aside3.svg";
import aside4 from "../assets/AsideImages/FirstArray/aside4.svg";
import aside5 from "../assets/AsideImages/FirstArray/aside5.svg";
import aside6 from "../assets/AsideImages/FirstArray/aside6.svg";

import aside7 from "../assets/AsideImages/SecondArray/aside1.svg";
import aside8 from "../assets/AsideImages/SecondArray/aside2.svg";
import aside9 from "../assets/AsideImages/SecondArray/aside3.svg";
import aside10 from "../assets/AsideImages/SecondArray/aside4.svg";
import aside11 from "../assets/AsideImages/SecondArray/aside5.svg";
import aside12 from "../assets/AsideImages/SecondArray/aside6.svg";
import aside13 from "../assets/AsideImages/SecondArray/aside7.svg";
import aside14 from "../assets/AsideImages/SecondArray/aside8.svg";

import aside15 from "../assets/AsideImages/ThirdArray/aside1.svg";
import aside16 from "../assets/AsideImages/ThirdArray/aside2.svg";
import { useContext, useState } from "react";
import { AsideContext } from "../App";


interface IAsideData{
    title: string,
    link: string
    picture: string
}

const AsideArrayData: IAsideData[] = [
    {
        title:'DashBoard',
        link:'/',
        picture: aside1
    },
    {
        title:'Products',
        link:'/products',
        picture: aside2
    },
    {
        title:'Favorites',
        link:'/favorites',
        picture: aside3
    },
    {
        title:'Inbox',
        link:'/inbox',
        picture: aside4
    },
    {
        title:'Order Lists',
        link:'/orderlists',
        picture: aside5
    },
    {
        title:'Product Stocks',
        link:'/productstocks',
        picture: aside6
    },
]

const AsideArrayPages: IAsideData[]= 
[
    {
        title:'Pricing',
        link:'/pricing',
        picture: aside7
    },
    {
        title:'Calender',
        link:'/calender',
        picture: aside8
    },
    {
        title:'To-Do',
        link:'/todo',
        picture: aside9
    },
    {
        title:'Contacts',
        link:'/contacts',
        picture: aside10
    },
    {
        title:'Invoice',
        link:'/invoice',
        picture: aside11
    },
    {
        title:'UI elements',
        link:'/uielemets',
        picture: aside12
    },
    {
        title:'Team',
        link:'/team',
        picture: aside13
    },
    {
        title:'Table',
        link:'/table',
        picture: aside14
    },
]

const AsideSettingsArray: IAsideData[] = 
[
    {
        title: "Settings",
        link: "/settings",
        picture: aside15
    },
    {
        title: "Logout",
        link: "/logout",
        picture: aside16
    }
]

const asideOpenAnim = keyframes`
    from{
        width: 0;
    }
    to{
        width: 16.6%;
    }
`

const asideCloseAnim = keyframes`
    from{
        width: 16.6%;
    }
    to{
        width: 0;
    }
`

export const AsideContainer = styled.aside`
    width: ${(props) => (props.isAside ? "16.6%" : "0")};
    opacity: ${(props) => (props.isAside ? "1" : "0")};
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-right: 1px solid #E0E0E0;
    /* position: fixed; */
    transition: all 1s;
    animation: ${(props) => (props.isAside ? asideOpenAnim : asideCloseAnim)} 1s;
`

export const AsideLink = styled(Link)`
    font-weight: 0.875em;
    font-weight: 600;
    color: ${(props) => (props.isActive ? "#FFFFFF" : "#000000")};
    transition: all 0.4s;
    background-color: white;
    text-decoration: none;
    width: 100%;
    line-height: 19.1px;
    padding: 6.3%;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 8.3%;
    background-color: ${(props) => (props.isActive ? "#4880FF" : "#FFFFFF")};

    & img{
        filter: ${(props) => (props.isActive ? "brightness(0) invert(1)" : "default")};
    }
`

export const AsideTitle = styled.h1`
    margin: 24px;
    margin: 8.3%;
    padding: 0;
    font-size: 1.25em;
    font-weight: 700;
`

export const AsidePagesTitle = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 0.75em;
    color: #202224;
    font-weight: 700;
    opacity: 0.6;
    margin: 6.3% 7%;
`

export const AsideList = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const AsideFirstList = styled(AsideList)`
`

export const AsideSecondList = styled(AsideList)`
    align-items: start;
`
export const AsideThirdList = styled(AsideList)`

`

export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
`

const Aside = () => {

    const { isAside } = useContext(AsideContext)
    const [isActive, setIsActive] = useState(1);

    return(
        <AsideContainer isAside={isAside}>
            <AsideTitle>DashStack</AsideTitle>
            <AsideFirstList>
                {
                    AsideArrayData.map((el, idx) => (
                        <AsideLink 
                        to={el.link} 
                        isActive={isActive === idx}
                        id={idx}
                        onClick={() => setIsActive(idx)}
                        >
                            <img src={el.picture}/>
                            {el.title}
                        </AsideLink>
                    ))
                }
            </AsideFirstList>
            <Hr/>
            <AsideSecondList>
                <AsidePagesTitle>
                    PAGES
                </AsidePagesTitle>
                {
                    AsideArrayPages.map((el) => (
                        <AsideLink to={el.link}>
                            <img src={el.picture}/>
                            {el.title}
                        </AsideLink>
                    ))
                }
            </AsideSecondList>
            <Hr/>
            <AsideThirdList>
                {
                    AsideSettingsArray.map((el) => (
                        <AsideLink to={el.link}>
                            <img src={el.picture}/>
                            {el.title}
                        </AsideLink>
                    ))
                }
            </AsideThirdList>
        </AsideContainer>
    )
}

export default Aside;