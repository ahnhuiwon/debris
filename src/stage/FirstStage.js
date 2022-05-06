import React from 'react'
import Header from '../component/common/Header'
import '../style/common.scss'
import '../style/stage.scss'
import lake_pic from '../style/img/miserable.jpg'
import Table from '../component/common/Table'
import BtnWrap from '../component/common/BtnWrap'

const FirstStage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="contents_wrap">
        <img src={lake_pic} alt="호수 사진" />
      </div>
      <BtnWrap />
    </>
  )
}

export default FirstStage
