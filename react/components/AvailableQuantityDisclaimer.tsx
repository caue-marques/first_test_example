import React from 'react'
import useProduct from 'vtex.product-context/useProduct'

const AvailableQuantityDisclaimer = () => {
  const product = useProduct()

  const quantity =
    product?.selectedItem?.sellers[0].commertialOffer?.AvailableQuantity

  if (!quantity) return null

  if (quantity === 0) {
    return <span>Out of stock</span>
  }

  if (quantity > 0 && quantity < 10) {
    return <span>Last units available</span>
  }

  return null
}

export default AvailableQuantityDisclaimer
