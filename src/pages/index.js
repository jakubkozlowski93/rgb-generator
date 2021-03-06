import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import { Wrapper, ColorOutput, ColorInfo, StyledTitle, ColorGenerator } from '../styles/index.styles'
import { rgbToHex, RGBToHSL } from './../helpers/functions'
import copy from './../assets/copy.svg'

const Home = () => {
  const [Rvalue, setRValue] = useState(247)
  const [Gvalue, setGValue] = useState(192)
  const [Bvalue, setBValue] = useState(227)
  const [hexValue, setHexValue] = useState('##f7c0e3')
  const [hslValue, setHslValue] = useState('hsl(322, 77%, 86%)')

  useEffect(() => {
    let hex = rgbToHex(Rvalue, Gvalue, Bvalue)
    setHexValue(hex)
    let hsl = RGBToHSL(`rgb(${Rvalue}, ${Gvalue}, ${Bvalue})`)
    setHslValue(hsl)
  }, [Rvalue, Gvalue, Bvalue])

  return (
    <Layout>
      <Wrapper>
        <ColorInfo>
          <StyledTitle>
            Click below to copy <img src={copy} alt="copy icon" />
          </StyledTitle>
          <p onClick={() => navigator.clipboard.writeText(`rgb(${Rvalue}, ${Gvalue}, ${Bvalue})`)}>
            rgb({Rvalue}, {Gvalue}, {Bvalue})
          </p>
          <p onClick={e => navigator.clipboard.writeText(e.target.innerText)}>{hexValue}</p>
          <p onClick={e => navigator.clipboard.writeText(e.target.innerText)}>{hslValue}</p>
        </ColorInfo>

        <ColorOutput isColor={`rgb(${Rvalue},${Gvalue},${Bvalue})`}></ColorOutput>

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
