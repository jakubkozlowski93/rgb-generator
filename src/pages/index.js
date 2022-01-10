import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
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
  background: ${({ isColor }) => (isColor ? isColor : 'yellow')};
  height: 180px;
  width: 250px;
`
const ColorInfo = styled.div`
  grid-row: 1;
  grid-column: 2/3;
  color: #4a6166;
  margin-left: 10px;
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
  const [Rvalue, setRValue] = useState(247)
  const [Gvalue, setGValue] = useState(192)
  const [Bvalue, setBValue] = useState(227)

  return (
    <>
      <GlobalStyle />
      <StyledNav>Color generator</StyledNav>
      <Wrapper>
        <ColorOutput isColor={`rgb(${Rvalue},${Gvalue},${Bvalue})`}></ColorOutput>
        <ColorInfo>
          <StyledTitle>Click to copy</StyledTitle>
          rgb({Rvalue}, {Gvalue}, {Bvalue}) <br />
          <br />
          #5995a6 <br />
          <br /> hsl(193, 30%, 50%)
        </ColorInfo>

        <ColorGenerator>
          <Typography id="non-linear-slider" gutterBottom>
            R: {Rvalue}
          </Typography>
          <Slider
            value={Rvalue}
            min={0}
            max={255}
            step={1}
            onChange={e => setRValue(e.target.value)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />

          <Typography id="non-linear-slider" gutterBottom>
            G: {Gvalue}
          </Typography>
          <Slider
            value={Gvalue}
            min={0}
            max={255}
            step={1}
            onChange={e => setGValue(e.target.value)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />

          <Typography id="non-linear-slider" gutterBottom>
            B: {Bvalue}
          </Typography>
          <Slider
            value={Bvalue}
            min={0}
            max={255}
            step={1}
            onChange={e => setBValue(e.target.value)}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </ColorGenerator>
      </Wrapper>
    </>
  )
}

export default Home
