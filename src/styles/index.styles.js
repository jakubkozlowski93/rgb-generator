import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  @media (min-width: 550px) {
    display: none;
    display: grid;
    grid-template-rows: 2;
    grid-template-columns: 2;
    padding: 30px;
  }

  @media (min-width: 950px) {
    padding: 40px 80px;
  }

  @media (min-width: 1600px) {
    margin-top: 100px;
  }
`

export const ColorOutput = styled.div`
  background: ${({ isColor }) => (isColor ? isColor : 'yellow')};
  height: 180px;
  width: 250px;

  @media (min-width: 550px) {
    grid-row: 1/2;
    grid-column: 1/2;
    width: 250px;
  }

  @media (min-width: 750px) {
    width: 300px;
    height: 220px;
  }

  @media (min-width: 950px) {
    width: 400px;
  }
`
export const ColorInfo = styled.div`
  color: #4a6166;
  p {
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }

  @media (min-width: 550px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  @media (min-width: 750px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 300px;
  }

  @media (min-width: 1400px) {
    width: 400px;
  }

  @media (min-width: 1600px) {
    width: 500px;
  }
`

export const StyledTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: normal;
  color: #4a6166;
  display: flex;
  align-items: center;
  height: 40px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 7px;
  }

  @media (min-width: 750px) {
    font-size: 24px;
  }
`

export const ColorGenerator = styled.div`
  width: 80%;

  @media (min-width: 550px) {
    grid-row: 2/3;
    grid-column: 1/3;
    width: 100%;
  }

  @media (min-width: 750px) {
    margin-top: 20px;
  }

  @media (min-width: 1400px) {
    margin-top: 70px;
  }
`
