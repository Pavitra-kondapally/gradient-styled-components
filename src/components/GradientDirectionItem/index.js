// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, selectingDirection} = props
  const {directionId, value, displayText} = directionDetails
  const onClickingDirectionItem = () => {
    selectingDirection(directionId)
  }

  return (
    <li>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickingDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
