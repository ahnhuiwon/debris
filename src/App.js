import './style/common.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstStage from './stage/FirstStage'
import 'bootstrap/dist/css/bootstrap.min.css'
import StartPage from './stage/StartPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/first" element={<FirstStage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
