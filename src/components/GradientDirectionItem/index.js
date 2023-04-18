// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
