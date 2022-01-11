import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2;
  grid-template-rows: 2;
  padding: 50px 30px;
`

export const ColorOutput = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  background: ${({ isColor }) => (isColor ? isColor : 'yellow')};
  height: 180px;
  width: 250px;
`
export const ColorInfo = styled.div`
  grid-row: 1;
  grid-column: 2/3;
  color: #4a6166;
  margin-left: 10px;

  p {
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }
`

export const StyledTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 24px;
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
  grid-row: 2/3;
  grid-column: 1/3;
`
