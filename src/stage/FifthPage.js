import React, { useState } from 'react'
import BtnWrap from '../component/common/BtnWrap'
import Header from '../component/common/Header'
import Table from '../component/common/Table'
import NonoTr from '../component/nonogram/NonoTr'

const row_data = [
  ['#'],
  [7],
  [2, 1],
  [1, 3, 3],
  [1, 5, 3],
  [1, 7, 6],
  [1, 2, 2, 1, 1, 1],
  [1, 5, 7],
  [1, 6, 1, 1, 1],
  [1, 1, 3, 1, 7],
  [1, 1, 2, 1, 1, 1],
  [3, 2, 1, 1, 1],
  [1, 3, 1, 7],
  [1, 5, 4, 1],
  [1, 5, 7],
  [1, 2, 2, 1, 1, 1],
  [1, 5, 6],
  [1, 5, 1],
  [1, 3, 3],
  [2, 1],
  [7],
]

const col_data = [
  [10],
  [2, 1, 2],
  [1, 1, 1],
  [1, 2, 1],
  [2, 1, 2],
  [1, 5, 5, 1],
  [1, 7, 7, 1],
  [1, 3, 3, 3, 3, 1],
  [1, 7, 7, 1],
  [1, 5, 5, 1],
  [2, 1, 2, 2],
  [1, 1, 4, 1],
  [2, 1],
  [14, 1],
  [2, 1, 1, 3, 2],
  [1, 1, 1, 3, 1],
  [12],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [10],
]

const FifthPage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="col-md-10 fifth_contents_wrap">
        <table>
          <thead>
            <tr>
              {row_data.map((data, index) => {
                return (
                  <th key={'out_data' + index}>
                    {data.map((in_data, index) => {
                      return <p key={'in_data' + index}>{in_data}</p>
                    })}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {col_data.map((data, index) => {
              return <NonoTr props={data} />
            })}
          </tbody>
        </table>
      </div>
      <BtnWrap />
    </>
  )
}

export default FifthPage
