// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props => props.gradient}; /* Use the gradient property */
  background-size: cover;
  height: 100vh;
`

export const AppTextStyle = styled.p`
  color: #ffffff79;
`
export const DirectionsList = styled.ul`
  list-style: none;
  display: flex;
`
export const ColorContainer = styled.div`
  display: flex;
`
export const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #00c9b7;
  border-radius: 5px;
  border-style: none;
  margin: 10px;
`
