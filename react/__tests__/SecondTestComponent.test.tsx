import React from 'react'
import { render } from '@vtex/test-tools/react'

import SecondTestComponent from '../components/SecondTestComponent'

describe('Should return Greeting Correctly', () => {
  it('should return Olá, Teste!', () => {
    const { queryByText } = render(<SecondTestComponent />)

    expect(queryByText('Olá, Teste!')).toBeInTheDocument()
  })
})
