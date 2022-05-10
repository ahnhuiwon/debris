import React, { useState } from 'react'

const NonoInput = () => {
  const [click_state, set_click_state] = useState(false)

  return (
    <>
      <td
        className={click_state ? 'on_mode' : ''}
        onClick={() => {
          set_click_state(!click_state)
        }}
      ></td>
    </>
  )
}

export default NonoInput
