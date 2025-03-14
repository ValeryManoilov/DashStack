import styled from "styled-components";
import Menu from "../assets/HeaderImages/Menu.svg";
import Search from "../assets/HeaderImages/Search.svg";
import Notification from "../assets/HeaderImages/Notification.svg";
import BritishFlag from "../assets/HeaderImages/BritishFlag.jpg";
import RussianFlag from "../assets/HeaderImages/RussianFlag.jpg";
import Avatar from "../assets/HeaderImages/Avatar.jpg";
import More from "../assets/HeaderImages/More.svg";
import Select from "react-select";
import { useContext, useState } from "react";
import { AsideContext } from "../App";

const LanguageOptions = [
    {
        value: "Русский",
        label: "Русский",
        flag: RussianFlag
    },
    {
        value: "English",
        label: "English",
        flag: BritishFlag
    }
]



export const HeaderContainer  = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1% 2.5%;
    position: relative;
`

export const SearchContainer  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
`

export const SearchImage = styled.img`
    position: absolute;
    top: auto;
    left: 17px;
    cursor: pointer;
`

export const HideAsideImage = styled.img`
    position: absolute;
    top: auto;
    left: 17px;
    cursor: pointer;
`

export const SearchInput = styled.input`
    padding: 10px 0 10px 50px;
    font-size: 0.875em;
    font-weight: 400;
    color: #202224;
    background-color: #F5F6FA;
    border: 1px solid #D5D5D5;
    border-radius: 50px;
`

export const LanguageContainer  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`

export const LanguageText  = styled.p`
    font-size: 0.875em;
    color: #646464;
`


export const LanguageMenu  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserInfo  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 23px;
    position: relative;
    cursor: pointer;
    margin: 0 auto;
`

export const UserInfoText  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Username  = styled.p`
    font-size: 0.875em;
    font-weight: 700;
    color: #404040;
`

export const Role  = styled.p`
    font-size: 0.75em;
    font-weight: 400;
    color: #404040;
`

export const DropDownImg  = styled.img`
    cursor: pointer;
`

export const ExitMenu  = styled.img`
    cursor: pointer;
    rotate: ${(props) => (props.exitMenu ? "180deg" : "0")};
    `

export const ExitButton  = styled.button`
    display: ${(props) => (props.exitMenu ? "block" : "none")};
    font-size: 0.875em;
    background-color: #e94343;
    border: none;
    padding: 0.5em 2em;
    position: absolute;
    border-radius: 20px;
    bottom: -100%;
    right: 0;
    cursor: pointer;
`


export const LeftPart  = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const RightPart  = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const FlagImg  = styled.img`
    width: 40px;
    height: 27px;
`

export const NotificationContainer = styled.button`
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;
    position: relative;
`

export const CountNotifications  = styled.circle`
    background-color: #F93C65;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 30px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Header = () => {
    const [language, setLanguage] = useState("British");
    const [flag, setFlag] = useState(BritishFlag)
    const [notifications, setNotifications] = useState(0)
    const { setAside } = useContext(AsideContext)
    const [exitMenu, setExitMenu] = useState(false)

    function resetFlag(optionLanguage)
    {
        if (optionLanguage.value != language)
        {
            setLanguage(optionLanguage.value);
            setFlag(optionLanguage.value == "English" ? BritishFlag : RussianFlag)
        }
    }


    return(
        <HeaderContainer>
            <LeftPart>
                <HideAsideImage src={Menu} onClick={() => setAside()}/>
                <SearchContainer>
                    <SearchImage src={Search}/>
                    <SearchInput type="text" placeholder="Search"/>
                </SearchContainer>
            </LeftPart>
            <RightPart>
                <NotificationContainer onClick={() => setNotifications(notifications+1)}>
                    <img src={Notification}/>
                    <CountNotifications>{notifications}</CountNotifications>
                </NotificationContainer>
                <LanguageContainer>
                    <FlagImg src={flag}/>
                    <Select
                        options={LanguageOptions} onChange={resetFlag} defaultValue={LanguageOptions[1]}
                    />
                </LanguageContainer>
                    <UserInfo onClick={() => setExitMenu(!exitMenu)}>
                        <img src={Avatar}/>
                        <UserInfoText>
                            <Username>Jonh Doe</Username>
                            <Role>Admin</Role>
                        </UserInfoText>
                        <ExitMenu src={More} alt="" exitMenu={exitMenu}/>
                        <ExitButton exitMenu={exitMenu}>Exit</ExitButton>
                    </UserInfo>
            </RightPart>
        </HeaderContainer>
    )
}

export default Header;