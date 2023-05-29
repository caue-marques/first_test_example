import React from 'react'

interface Props {
  name: string
}

const FirstTestComponent = ({ name }: Props) => {
  if (name === 'Cauê') {
    return (
      <div>
        <p>Hey, {name}</p>
      </div>
    )
  }

  return (
    <div>
      <p>Hey, Fulano</p>
    </div>
  )
}

export default FirstTestComponent
