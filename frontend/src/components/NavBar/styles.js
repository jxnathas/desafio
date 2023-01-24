import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav `
    width: 100%;
    height: 125px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-right: 50px;
`;

export const NavBarInnerContainer = styled.div`
    width:100%;
    height: 125px;
    display: flex;
    background-color: #FFFFFFF;
`;

export const NavBarLinkContainer = styled.div`
    display: flex;
`;

export const NavBarLink = styled(Link)`
    color: #777777;
    font-size: 20px;
    font-weight: bold;
    font-family: Sora;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 255;
    height: auto;
`;

export const Line = styled.img`

`;

export const NavBarExtendedContainer = styled.div`

`;