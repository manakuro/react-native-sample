import React from 'react'
import styled from 'styled-components/native'
import Heading from 'app/src/components/Heading'
import { mainBackgroundColour } from 'app/src/const/style'
import TasksList, { Task } from 'app/src/components/TasksList'

interface Props {}

const tasks: Task[] = [{ id: 1, name: 'task 1' }, { id: 2, name: 'task 2' }]

export default class App extends React.Component<Props> {
  public render() {
    return (
      <StyledView>
        <Heading text="My Tasks" />
        <TextInputWrapper>
          <TextInput placeholder="New Task here" autoFocus />
        </TextInputWrapper>
        <TasksList data={tasks} />
      </StyledView>
    )
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: ${mainBackgroundColour};
  padding: 50px 30px;
`

const TextInputWrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  margin-bottom: 30px;
`

const TextInput = styled.TextInput`
  width: 100%;
  padding: 5px 0;

  font-size: 16px;
`
