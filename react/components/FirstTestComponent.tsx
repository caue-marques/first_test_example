import React from 'react'

interface Props {
  name: string
}

const FirstTestComponent = ({ name }: Props) => {
  return (
    <div>
      <p>Hey, {name}</p>
    </div>
  )
}

export default FirstTestComponent
