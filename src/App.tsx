import 'bootstrap/dist/css/bootstrap.min.css'
import './style/scss/common.scss';
import './style/scss/stage.scss';
import { nanoid } from 'nanoid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FirstRoute from './route/FirstRoute';
import SecondRoute from './route/SecondRoute';
import ThirdRoute from './route/ThirdRoute';
import FourthRoute from './route/FourthRoute';
import FifthRoute from './route/FifthRoute';
import SixthRoute from './route/SixthRoute';
import SevenRoute from './route/SevenRoute';
import EightRoute from './route/EightRoute';
import NineRoute from './route/NineRoute';
import TenRoute from './route/TenRoute';

function App() {
  const temp_route = nanoid();

  console.log(temp_route);
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Routes>
            <Route path="/" element={ <FirstRoute /> }/ >
            <Route path="/peH1C9d6sVhLKmFSkjWd1" element={ <SecondRoute/> } />
            <Route path="/QC2XnHYOEixdZgfVNdf65" element={ <ThirdRoute /> } />
            <Route path="/gsptamKLiqxSizc9QLILX" element={ <FourthRoute /> } />
            <Route path='/QvC7ag1lY6a_QVQCgKEIQ' element={ <FifthRoute /> } />
            <Route path='/HYdJIKd_tUbzmgFDXlxqL' element={ <SixthRoute /> } />
            <Route path='/ylYtHZiUx_imU0GAtPzzd' element={ <SevenRoute /> } />
            <Route path='/FwQshbQRbKQVL0FYIBjhv' element={ <EightRoute />} />
            <Route path='/Xdhe9C28H67TlpKTjpdsj' element={ <NineRoute />} />
            <Route path='/XPlBWg23Igj5kjSKxfYjV' element={ <TenRoute />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
