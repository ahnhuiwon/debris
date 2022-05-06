import React from 'react'
import BtnWrap from '../component/common/BtnWrap'
import Header from '../component/common/Header'
import Table from '../component/common/Table'
import pierrot from '../style/img/pierrot.jpg'

const FourthPage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="fourth_contents_wrap">
        <p className="dummy_text">Are you funny?</p>
        <img className="pierrot_img" src={pierrot} alt="광대 사진" />
        <p className="real_text">Why so serious?</p>
      </div>
      <BtnWrap />
    </>
  )
}

export default FourthPage
