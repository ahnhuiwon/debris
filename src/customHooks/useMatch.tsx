import { useNavigate } from 'react-router-dom';

const useMatchAnswer = () => {
    const navigate = useNavigate();

    const match_answer = (param: any) => {

        const url = window.location.href.split('/');
        const last_url = url[url.length - 1]

        switch (last_url) {
            case 'peH1C9d6sVhLKmFSkjWd1':
              param === 'miserable' && navigate('/QC2XnHYOEixdZgfVNdf65')
              break
            case 'QC2XnHYOEixdZgfVNdf65':
              param === 'avemaria' && navigate('/gsptamKLiqxSizc9QLILX')
              break
            case 'gsptamKLiqxSizc9QLILX':
              param === 'newyork' && navigate('/QvC7ag1lY6a_QVQCgKEIQ')
              break
            case 'QvC7ag1lY6a_QVQCgKEIQ':
              param === '846103972' && navigate('/HYdJIKd_tUbzmgFDXlxqL')
              break
            case 'HYdJIKd_tUbzmgFDXlxqL':
              (param === 'christmas' || param === 'x-mas') && navigate('/Bym3dGXQ8NmCrGOkS')
              break
            default:
              return false
        }
    }

    return { match_answer }
}

export default useMatchAnswer;