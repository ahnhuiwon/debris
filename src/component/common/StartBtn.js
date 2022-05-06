import React from 'react'
import { Link } from 'react-router-dom'

const StartBtn = () => {
  return (
    <>
      <div className="start_btn_wrap">
        <Link to="/first">
          <button type="button" class="btn btn-outline-danger btn-lg">
            시작하기
          </button>
        </Link>
      </div>
    </>
  )
}

export default StartBtn
