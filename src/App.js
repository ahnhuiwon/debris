import './style/common.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstStage from './stage/FirstStage'
import 'bootstrap/dist/css/bootstrap.min.css'
import StartPage from './stage/StartPage'
import SecondPage from './stage/SecondPage'
import ThirdPage from './stage/ThirdPage'
import FourthPage from './stage/FourthPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/first" element={<FirstStage />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/third" element={<ThirdPage />} />
            <Route path="/fourth" element={<FourthPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
