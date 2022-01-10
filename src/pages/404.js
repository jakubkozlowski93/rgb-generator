import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    margin: 0;
  }
`

const PageNotFound = () => (
  <Wrapper>
    <h1>404</h1>
    <h2>Not found</h2>
  </Wrapper>
)

export default PageNotFound
