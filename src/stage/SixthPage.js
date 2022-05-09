import React from 'react'
import BtnWrap from '../component/common/BtnWrap'
import Header from '../component/common/Header'
import Table from '../component/common/Table'
import playground from '../style/img/playground.jpg'

const SixthPage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="six_contents_wrap">
        <img src={playground} alt="놀이터" />
        <p>212</p>
        <p>718</p>
        <p>917</p>
        <p>646</p>
      </div>
      <BtnWrap />
    </>
  )
}

export default SixthPage
