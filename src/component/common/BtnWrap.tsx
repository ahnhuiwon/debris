import { useState, useEffect } from 'react';
import useMatchAnswer from '../../customHooks/useMatch';

const BtnWrap = () => {

  const [user_answer, set_user_answer] = useState<string | null>("");
  const { match_answer } = useMatchAnswer();

  return(
    <>
      <div className="btn_box">
        <div className="col-md-3 btn_wrap">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="answer_input"
              onChange={ e=>{ set_user_answer(e.target.value) }}
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
      </div>
    </>
  )
}

export default BtnWrap;