import { useEffect, useState } from 'react'
import { type_data } from '../etc/dummy_data'

// 힌트와 타입 셋팅 hooks
export const useTableData = () => {
  const [setting_data, set_setting_data] = useState(null)
  useEffect(() => {
    const url = window.location.href.split('/')

    const last_value = url[url.length - 1]

    switch (last_value) {
      case 'first':
        return_func(last_value)
        break
      case 'second':
        return_func(last_value)
        break
      case 'third':
        return_func(last_value)
        break
      case 'fourth':
        return_func(last_value)
        break
      case 'sixth':
        return_func(last_value)
        break
      default:
        return false
        break
    }
  }, [])

  // 힌트와 타입 셋팅 함수
  const return_func = async param => {
    const temp_data = type_data.filter(data => data.name === param)
    await set_setting_data(temp_data)
  }

  return setting_data
}
