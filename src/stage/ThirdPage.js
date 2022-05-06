import React from 'react'
import BtnWrap from '../component/common/BtnWrap'
import Header from '../component/common/Header'
import Table from '../component/common/Table'

const ThirdPage = () => {
  return (
    <>
      <Header />
      <Table />
      <div className="third_contents_wrap">
        <p>First time I saw you</p>

        <p>(처음 당신을 본)</p>

        <p>At the restaurant</p>

        <p>(그 식당에서)</p>

        <p>Let me have a crush on you</p>

        <p>(난 그대에게 빠졌습니다.)</p>

        <p>Show me more</p>

        <p>(더 보여주세요)</p>

        <p>Especially your beautiful face...</p>

        <p>(특히 당신의 아름다운 얼굴을...)</p>
      </div>
      <BtnWrap />
    </>
  )
}

export default ThirdPage
