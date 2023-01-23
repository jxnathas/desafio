import React from 'react'
import LogoAsset from '../../assets/logo.png';
import * as C from "./styles";

const index = () => {
  return (
    <C.NavbarContainer>
        <C.NavBarInnerContainer>
        <C.LeftContainer> 
          <C.Logo src={LogoAsset}></C.Logo>
        </C.LeftContainer>
        <C.RightContainer> 
            <C.NavBarLinkContainer>
                <C.NavBarLink to="/">HOME</C.NavBarLink >
                <C.NavBarLink  to="/">MAQUININHAS</C.NavBarLink >
                <C.NavBarLink  to="/">SOBRE NÓS</C.NavBarLink >
                <C.NavBarLink  to="/">PEÇA A SUA PAGGUE</C.NavBarLink >
            </C.NavBarLinkContainer>
        </C.RightContainer>
        </C.NavBarInnerContainer>
        <C.NavBarExtendedContainer></C.NavBarExtendedContainer>
    </C.NavbarContainer>
  )
}

export default index