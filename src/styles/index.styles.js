import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
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
`
export const ColorInfo = styled.div`
  color: #4a6166;
  margin-left: 10px;

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
`

export const ColorGenerator = styled.div`
  width: 80%;

  @media (min-width: 550px) {
    grid-row: 2/3;
    grid-column: 1/3;
    width: 100%;
  }
`
