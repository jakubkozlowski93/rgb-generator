import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './../GlobalStyle'
import Typography from '@mui/material/Typography'

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
  background: pink;
  height: 150px;
  width: 100%;
`
const ColorInfo = styled.div`
  grid-row: 1;
  grid-column: 2/3;
  color: #4a6166;
  margin-left: 30px;
`

const StyledTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: normal;
  color: #4a6166;
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
        <ColorOutput></ColorOutput>
        <ColorInfo>
          <StyledTitle>Click to copy</StyledTitle>
          rgb(89, 146, 166) <br />
          <br />
          #5995a6 <br />
          <br /> hsl(193, 30%, 50%)
        </ColorInfo>
        <ColorGenerator>
          Generator Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam harum dolorem maxime quo. Dignissimos dolores consequatur magni!
          At adipisci soluta repudiandae perferendis inventore, ad explicabo officia odit impedit, totam possimus!
        </ColorGenerator>
        <Typography variant="h4" component="h1" gutterBottom>
          ass
        </Typography>
      </Wrapper>
    </>
  )
}

export default Home
