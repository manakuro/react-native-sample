import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
  text: string
}

export default function WelcomeText(props: Props) {
  return <Text style={styles.welcome}>{props.text}</Text>
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
