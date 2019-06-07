import React, { Component } from 'react'
import styled from 'styled-components/native'
import { textColour } from 'app/src/const/style'
import { FlatList } from 'react-native'

interface Props {
  data: Task[]
}

export interface Task {
  id: number
  name: string
}

export default function TasksList(props: Props) {
  return (
    <TaskList
      data={props.data}
      keyExtractor={(item: Task) => item.id.toString()}
      renderItem={({ item }: { item: Task }) => (
        <TaskListItem>{item.name}</TaskListItem>
      )}
    />
  )
}

// @see https://github.com/styled-components/styled-components/issues/1803
const TaskList = styled(FlatList as any)``

const TaskListItem = styled.Text`
  padding: 10px 0;
  color: ${textColour};
`
