import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import { Wrapper, ColorOutput, ColorInfo, StyledTitle, ColorGenerator } from './index.styles'

const componentToHex = c => {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const Home = () => {
  const [Rvalue, setRValue] = useState(247)
  const [Gvalue, setGValue] = useState(192)
  const [Bvalue, setBValue] = useState(227)
  const [hexValue, setHexValue] = useState('##f7c0e3')

  React.useEffect(() => {
    let hex = rgbToHex(Rvalue, Gvalue, Bvalue)
    setHexValue(hex)
  }, [Rvalue, Gvalue, Bvalue])

  return (
    <Layout>
      <Wrapper>
        <ColorOutput isColor={`rgb(${Rvalue},${Gvalue},${Bvalue})`}></ColorOutput>
        <ColorInfo>
          <StyledTitle>Click to copy</StyledTitle>
          rgb({Rvalue}, {Gvalue}, {Bvalue}) <br />
          <br />
          {hexValue} <br />
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
    </Layout>
  )
}

export default Home
