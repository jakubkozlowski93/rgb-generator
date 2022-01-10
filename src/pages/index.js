import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './../GlobalStyle'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'

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
`

const Home = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <GlobalStyle />
      <StyledNav>Color generator</StyledNav>
      <Wrapper>
        <ColorOutput></ColorOutput>
        <ColorInfo>
          <StyledTitle>Click to copy</StyledTitle>
          rgb({value}, 146, 166) <br />
          <br />
          #5995a6 <br />
          <br /> hsl(193, 30%, 50%)
        </ColorInfo>
        <ColorGenerator>
          <Typography id="non-linear-slider" gutterBottom>
            R: {value}
            {/* Storage: {valueLabelFormat(calculateValue(value))} */}
          </Typography>
          <Slider
            value={value}
            min={0}
            max={255}
            step={1}
            // scale={calculateValue}
            // getAriaValueText={valueLabelFormat}
            // valueLabelFormat={valueLabelFormat}
            // onChange={handleChange}
            onChange={e => setValue(e.target.value)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </ColorGenerator>
      </Wrapper>
    </>
  )
}

export default Home
