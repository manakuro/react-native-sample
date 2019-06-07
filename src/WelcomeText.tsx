import React from 'react'
import styled from 'styled-components/native'

interface Props {
  text: string
}

export default function WelcomeText(props: Props) {
  return <StyledText>{props.text}</StyledText>
}

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`
