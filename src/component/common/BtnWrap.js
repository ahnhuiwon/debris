import React from 'react'

const BtnWrap = () => {
  return (
    <>
      <div className="col md-3 btn_wrap">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-danger" type="button" id="button-addon2">
            정답
          </button>
        </div>
      </div>
    </>
  )
}

export default BtnWrap
