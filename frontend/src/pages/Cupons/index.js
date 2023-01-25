import React from 'react'
import * as C from "./styles"
import NavBar from "../../components/NavBar"
import CupomList from '../../components/CupomList'

const Cupons = () => {
  return (
    <C.Container>
      <NavBar/>
      <CupomList/>
    </C.Container>
  )
}

export default Cupons