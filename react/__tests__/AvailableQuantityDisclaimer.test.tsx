import { render } from '@vtex/test-tools/react'
import React from 'react'
import useProduct from 'vtex.product-context/useProduct'

import AvailableQuantityDisclaimer from '../AvailableQuantityDisclaimer'

const mockedUseProduct = useProduct

const mockProduct = (AvailableQuantity: number | undefined) => {
  mockedUseProduct.mockImplementation(() => ({
    selectedItem: {
      sellers: [
        {
          commercialOffer: {
            AvailableQuantity,
          },
        },
      ],
    },
  }))
}

describe('Tests for AvailableQuantityDisclaimer component', () => {
  it('Should render message Out of Stock when quantity is zero', () => {
    mockProduct(0)
    const { getByText } = render(<AvailableQuantityDisclaimer />)

    expect(getByText('Out of stock')).toBeDefined()
  })

  it('Should render message Last units available when quantity is greater than zero and less than 10', () => {
    mockProduct(9)
    const { getByText } = render(<AvailableQuantityDisclaimer />)

    expect(getByText('Last units available')).toBeDefined()
  })
})
