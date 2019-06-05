import 'react-native'
import React from 'react'
import App from 'app/src/App'

import { render } from '@testing-library/react-native'

it('renders correctly', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toMatchSnapshot()
})
