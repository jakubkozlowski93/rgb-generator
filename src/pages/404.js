import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: '#4a6166';

  h1 {
    font-size: 150px;
    margin: 0;
    line-height: 1;
  }

  h2 {
    margin: 0;
  }

  p {
    text-align: center;
  }
`

const PageNotFound = () => (
  <Wrapper>
    <h1>404</h1>
    <h2>Not Found</h2>
    <p>The resource requested could not be found on this server.</p>
    <Link to="/">Back to homepage.</Link>
  </Wrapper>
)

export default PageNotFound
