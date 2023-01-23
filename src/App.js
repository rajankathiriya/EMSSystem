import logo from './logo.svg';
import './App.css';
import LoginEMS from './Component/EMS/Login';
import RegistrationEMS from './Component/EMS/Registration';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './Component/EMS/Private/Requiredau';
import Dashboard from './Component/EMS/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginEMS />} />
          <Route path='/registration' element={<RegistrationEMS />} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
