import React from 'react'
import Header from '../component/common/Header'
import Table from '../component/common/Table'
import BtnWrap from '../component/common/BtnWrap'

const SecondPage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="contents_wrap">
        <p>Virgo serena, pia, munda et immaculata</p>
        <p>(거룩하고 신성하며 순수하고 순결한 동정녀)</p>
      </div>
      <BtnWrap />
    </>
  )
}

export default SecondPage
