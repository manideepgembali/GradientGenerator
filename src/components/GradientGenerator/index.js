import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  Description,
  UnorderedList,
  ColorDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS color Gradient</Heading>
        <Description>Choose Direction</Description>
        <UnorderedList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientDetails={eachItem}
              isActive={activeGradientDirection === eachItem.value}
              clickGradientDirectionItem={this.clickGradientDirectionItem}
            />
          ))}
        </UnorderedList>
        <ColorDescription>Pick the Colors</ColorDescription>
        <ColorPickerContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{fromColorInput}</ColorValue>
            <CustomInput
              value={fromColorInput}
              type="color"
              onChange={this.onChangeFromColor}
            />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{toColorInput}</ColorValue>
            <CustomInput
              value={toColorInput}
              type="color"
              onChange={this.onChangeToColor}
            />
          </CustomInputAndColorContainer>
        </ColorPickerContainer>
        <GenerateButton type="submit" onClick={this.onGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
