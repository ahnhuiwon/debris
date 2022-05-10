import React, { useState } from 'react'
import useMatchAnswer from '../../hooks/useMatch'

const BtnWrap = () => {
  const [user_answer, set_user_answer] = useState('')
  const { match_answer } = useMatchAnswer()

  return (
    <>
      <div className="col md-3 btn_wrap">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="answer_input"
            onChange={e => {
              set_user_answer(e.target.value)
            }}
          />
          <button
            className="btn btn-danger"
            type="button"
            id="button-addon2"
            onClick={() => {
              match_answer(user_answer)
            }}
          >
            제출
          </button>
        </div>
      </div>
    </>
  )
}

export default BtnWrap
