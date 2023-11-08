
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppTMTsignuppage from './component1/AppTMTsignuppage';
import AppTMTloginpage from './component1/AppTMTloginpage';
import AppTMThomepage from './component1/AppTMThomepage';
import AppTMTstatisticpage from './component1/AppTMTstatisticpage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AppTMTsignuppage />}></Route>
          <Route path='/apptmtloginpage' element={<AppTMTloginpage />}></Route>
          <Route path='/apptmthomepage' element={<AppTMThomepage />}></Route>
          <Route path='/apptmtstatisticpage' element={<AppTMTstatisticpage />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
