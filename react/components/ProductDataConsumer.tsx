import React from 'react'
import useProduct from 'vtex.product-context/useProduct'

const ProductDataConsumer = () => {
  const product = useProduct()

  const prod = product?.selectedItem

  const quantity = prod?.sellers[0]?.commercialOffer?.availableQuantity

  if (prod) {
    if (quantity > 0 && quantity < 10) {
      return (
        <div>
          <h2>Product information</h2>

          <h4>Last units available</h4>

          <div>Prod Id: {prod.itemId}</div>
          <div>Prod Name: {prod.nameComplete}</div>
          <div>Prod Ean: {prod.ean}</div>
        </div>
      )
    }

    if (quantity === 0) {
      return (
        <div>
          <h2>Product information</h2>

          <h4>Out of stock</h4>

          <div>Prod Id: {prod.itemId}</div>
          <div>Prod Name: {prod.nameComplete}</div>
          <div>Prod Ean: {prod.ean}</div>
        </div>
      )
    }

    return (
      <div>
        <h2>Product information</h2>

        <div>Prod Id: {prod.itemId}</div>
        <div>Prod Name: {prod.nameComplete}</div>
        <div>Prod Ean: {prod.ean}</div>
      </div>
    )
  }

  return <div>you are not in a product page</div>
}

export default ProductDataConsumer
