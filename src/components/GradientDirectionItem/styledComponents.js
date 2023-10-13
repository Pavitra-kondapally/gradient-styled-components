// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  color: #1e293b;
  background-color: ${props => (props.isActive ? '#ffffff79' : '#ededed')};
  opacity: ${props => (props.isActive ? 1 : 0.5)}
  height: 30px;
  width: 50px;
  border-radius: 5px;
  border-style: none;
  margin: 10px;
`
