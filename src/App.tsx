import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components/native'
import WelcomeText from 'app/src/WelcomeText'
import { mainBackgroundColour, textColour } from 'app/src/const/style'
import img from 'app/src/assets/images/manato.jpg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

interface Props {}

export default class App extends React.Component<Props> {
  public render() {
    return (
      <StyledView>
        <WelcomeText text="Welcome to React Native" />
        <Instructions>To get started, edit App.js and</Instructions>
        <Instructions>{instructions}</Instructions>
        <StyledImage source={img} />
      </StyledView>
    )
  }
}

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${mainBackgroundColour};
`

const Instructions = styled.Text`
  text-align: center;
  color: ${textColour};
  margin-bottom: 5px;
`

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`
