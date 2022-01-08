import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './../GlobalStyle'

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

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2;
  grid-template-rows: 2;
  padding: 50px 30px;
`

const ColorOutput = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  background: yellow;
`
const ColorInfo = styled.div`
  grid-row: 1;
  grid-column: 2/3;
  background: pink;
`

const ColorGenerator = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  background: red;
`

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledNav>Color generator</StyledNav>
      <Wrapper>
        <ColorOutput>Output</ColorOutput>
        <ColorInfo>Info</ColorInfo>
        <ColorGenerator>
          Generator Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam harum dolorem maxime quo. Dignissimos dolores consequatur magni!
          At adipisci soluta repudiandae perferendis inventore, ad explicabo officia odit impedit, totam possimus!
        </ColorGenerator>
      </Wrapper>
    </>
  )
}

export default Home
