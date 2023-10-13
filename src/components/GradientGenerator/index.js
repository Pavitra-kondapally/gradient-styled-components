import {Component} from 'react'

import {
  AppContainer,
  AppTextStyle,
  DirectionsList,
  ColorContainer,
  ColorItem,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    directionChosen: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradient: 'linear-gradient(to top, #8ae323, #014f7b)',
  }

  onGeneratingBackground = () => {
    const {directionChosen, firstColor, secondColor} = this.state

    // Construct the CSS gradient string
    const gradient = `linear-gradient(to ${directionChosen}, ${firstColor}, ${secondColor})`

    // Update the state with the gradient
    this.setState({
      gradient, // Add this property to your state
    })
  }

  selectingDirection = directionId => {
    this.setState({directionChosen: directionId})
  }

  onChangingFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangingSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {directionChosen, firstColor, secondColor, gradient} = this.state

    return (
      <AppContainer gradient={gradient} data-testid="gradientGenerator">
        <AppTextStyle as="h1">Generate a CSS Color Gradient</AppTextStyle>
        <AppTextStyle>Choose Direction</AppTextStyle>
        <DirectionsList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionDetails={eachDirection}
              key={eachDirection.directionId}
              isActive={directionChosen === eachDirection.directionId}
              selectingDirection={this.selectingDirection}
            />
          ))}
        </DirectionsList>
        <AppTextStyle>Pick the Colors</AppTextStyle>
        <ColorContainer>
          <ColorItem>
            <AppTextStyle>{firstColor}</AppTextStyle>
            <input
              type="color"
              value={firstColor}
              onChange={this.onChangingFirstColor}
            />
          </ColorItem>
          <ColorItem>
            <AppTextStyle>{secondColor}</AppTextStyle>
            <input
              type="color"
              value={secondColor}
              onChange={this.onChangingSecondColor}
            />
          </ColorItem>
        </ColorContainer>
        <GenerateButton onClick={this.onGeneratingBackground}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
