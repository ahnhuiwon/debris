import React from 'react'

const Table = () => {
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
              <td>영단어</td>
              <td>Picture</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
