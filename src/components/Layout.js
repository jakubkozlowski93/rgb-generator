import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'

const StyledNav = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #0247fe;
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #ffffff;
  padding: 0 20px;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledNav>Color generator</StyledNav>
      {children}
    </>
  )
}

export default Layout
