// You need to install React/React-DOM
import {Fireworks} from 'fireworks/lib/react'
import React from 'react'

function Firework() {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#FF3358', '#334EFF', '#D733FF'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div>
      <Fireworks {...fxProps} />
      <h1>Thanks for buying!!</h1>
    </div>
  )
}
export default Firework
