import { render } from '@vtex/test-tools/react'
import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { Item } from 'vtex.product-context/react/ProductTypes'

import ProductDataConsumer from '../ProductDataConsumer'

const mockedUseProduct = useProduct

const mockProduct = (selectedItem: Item | undefined) => {
  mockedUseProduct.mockImplementation(() => ({
    selectedItem,
  }))
}

const mockProductQuantity = (availableQuantity: number | undefined) => {
  mockedUseProduct.mockImplementation(() => ({
    selectedItem: {
      sellers: [
        {
          commercialOffer: {
            availableQuantity,
          },
        },
      ],
    },
  }))
}

describe('should return product quantity correctly', () => {
  it('should display Out of stock when quantity is zero', () => {
    mockProductQuantity(0)
    const { getByText } = render(<ProductDataConsumer />)

    expect(getByText('Out of stock')).toBeDefined()
  })

  it('should display Last units available when quantity greater than zero and less than ten', () => {
    mockProductQuantity(9)
    const { getByText } = render(<ProductDataConsumer />)

    expect(getByText('Last units available')).toBeDefined()
  })
})

describe('should return product specs correctly', () => {
  it('should return "you are not in a product page" when not inside a product page', () => {
    mockProduct(undefined)
    const { getByText } = render(<ProductDataConsumer />)

    expect(getByText('you are not in a product page')).toBeTruthy()
  })

  it('should return current product itemId, nameComplete and ean when inside a product page', () => {
    mockProduct({
      complementName: 'teste',
      ean: '12321312313',
      images: [],
      itemId: '123213123',
      measurementUnit: 'cm',
      name: 'teste',
      nameComplete: 'produtinho teste',
      referenceId: [],
      sellers: [],
      unitMultiplier: 0,
      variations: [],
      videos: [],
    })
    const { getByText } = render(<ProductDataConsumer />)

    expect(getByText('Product information')).toBeTruthy()
  })
})
