import { useNavigate } from 'react-router-dom'

// 정답 매칭 hooks
const useMatchAnswer = () => {
  const navigate = useNavigate()
  const match_answer = param => {
    const url = window.location.href.split('/')
    const last_value = url[url.length - 1]

    switch (last_value) {
      case 'first':
        param === 'miserable' && navigate('/second')
        break
      case 'second':
        param === 'ave maria' && navigate('/third')
        break
      case 'third':
        param === 'false' && navigate('/fourth')
        break
      case 'fourth':
        param === 'joker' && navigate('/fifth')
        break
      case 'fifth':
        param === 'newyork' && navigate('/sixth')
        break
      default:
        return false
    }
  }

  return { match_answer }
}

export default useMatchAnswer
