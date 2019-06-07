import React from 'react'
import styled from 'styled-components/native'
import { textColour } from 'app/src/const/style'

interface Props {
  text: string
}

export default function Heading(props: Props) {
  return <StyledText>{props.text}</StyledText>
}

const StyledText = styled.Text`
  font-size: 36px;
  margin-bottom: 30px;
  color: ${textColour};
`
