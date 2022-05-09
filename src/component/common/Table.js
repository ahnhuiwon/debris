import React from 'react'

import { useTableData } from '../../hooks/useHintType'

const Table = () => {
  const setting = useTableData()

  return (
    <>
      <div className="col-md-10 table_wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Hint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{setting && setting[0].type}</td>
              <td>{setting && setting[0].hint}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
