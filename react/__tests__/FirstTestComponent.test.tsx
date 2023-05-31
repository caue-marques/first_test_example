import React from 'react'
import { render } from '@vtex/test-tools/react'

import FirstTestComponent from '../components/FirstTestComponent'

describe('Should return Greeting Correctly', () => {
  it('should return Hey Cauê', () => {
    const { queryByText } = render(<FirstTestComponent name="Cauê" />)

    expect(queryByText('Hey, Cauê')).toBeTruthy()
  })

  it('should return Hey, Fulano', () => {
    const { queryByText } = render(<FirstTestComponent name="teste" />)

    expect(queryByText('Hey, Fulano')).toBeInTheDocument()
  })
})
