import React from 'react'
import { Link } from 'react-router-dom'

const StartBtn = () => {
  return (
    <>
      <div className="start_btn_wrap">
        <Link to="/first">
          <button type="button" class="btn btn-outline-danger btn-lg">
            μμνκΈ°
          </button>
        </Link>
      </div>
    </>
  )
}

export default StartBtn
