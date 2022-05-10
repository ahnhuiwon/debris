import React from 'react'
import NonoInput from './NonoInput'

const NonoTr = ({ props }) => {
  console.log(props)
  return (
    <tr>
      <th>
        {props.map((data, index) => {
          return <span>{data}</span>
        })}
      </th>
      {[...Array(20)].map((data, index) => {
        return <NonoInput />
      })}
    </tr>
  )
}

export default NonoTr
