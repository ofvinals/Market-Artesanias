import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/home';
import Login from './pages/login'
import Register from './pages/register'
import Store from './pages/store'
import Detail from './pages/detail'
import Profile from './pages/profile'
import AboutUs from './pages/aboutUs'
import Payment from './pages/payment'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Homepage />} />
        <Route path='/store' element={<Store/>}/>
        <Route path='/store/:id' element={<Detail/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </>
  );
}

export default App;
