import React from 'react'
import LogoAsset from '../../assets/logo.png';
import * as C from "./styles";

const index = () => {
  return (
    <C.NavbarContainer>
        <NavBarInnerContainer>
        <C.LeftContainer> 
          <C.Logo src={LogoAsset}></C.Logo>
        </C.LeftContainer>
        <C.RightContainer> 
            <C.NavBarLinkContainer>
                <NavBarLink to="/">HOME</NavBarLink >
                <NavBarLink  to="/">MAQUININHAS</NavBarLink >
                <NavBarLink  to="/">SOBRE NÓS</NavBarLink >
                <NavBarLink  to="/">PEÇA A SUA PAGGUE</NavBarLink >
            </C.NavBarLinkContainer>
        </C.RightContainer>
        </NavBarInnerContainer>
        <NavBarExtendedContainer></NavBarExtendedContainer>
    </C.NavbarContainer>
  )
}

export default index